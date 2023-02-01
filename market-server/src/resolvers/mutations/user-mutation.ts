import { Prisma, PrismaClient } from "@prisma/client";
import { GraphQLError } from "graphql";
import { errorCodes } from "../../constants/errorCodes.js";
import { IRegisterInput, IAuthPayload, ILoginInput } from "../../interfaces/IUser.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (
  parent: any,
  { registerInput }: IRegisterInput,
  {
    prisma,
  }: {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
  }
): Promise<IAuthPayload> => {
  const { username, password, email, confirmPassword } = registerInput;
  // check if username is taken
  if (await prisma.user.findFirst({ where: { username } })) {
    throw new GraphQLError(`username ${username} is taken`, {
      extensions: {
        code: errorCodes.INVALID_USER_INPUT,
      },
    });
  }
  //   check if email is taken
  if (await prisma.user.findFirst({ where: { email } })) {
    throw new GraphQLError(`email ${email} is taken`, {
      extensions: {
        code: errorCodes.INVALID_USER_INPUT,
      },
    });
  }
  //   generate passwordHash
  var passwordSalt = bcrypt.genSaltSync(10);
  var passwordHash = bcrypt.hashSync(password, passwordSalt);

  var registeredUser = await prisma.user.create({
    data: {
      username,
      email,
      passwordHash,
    },
  });
  return {
    accessToken: jwt.sign(
      { id: registeredUser.id, username: registeredUser.username, email: registeredUser.email },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    ),
  };
};

export const login = async (
  parent: any,
  { loginInput }: ILoginInput,
  {
    prisma,
  }: {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
  }
): Promise<IAuthPayload> => {
  const { username, password } = loginInput;
  // check if username exists

  const loginUser = await prisma.user.findFirst({ where: { username: username } });

  if (!loginUser) {
    throw new GraphQLError(`invalid credentials`, {
      extensions: {
        code: errorCodes.INVALID_USER_INPUT,
      },
    });
  }
  // validate password
  if (!bcrypt.compareSync(password, loginUser.passwordHash)) {
    throw new GraphQLError(`invalid credentials`, {
      extensions: {
        code: errorCodes.INVALID_USER_INPUT,
      },
    });
  }
  return {
    accessToken: jwt.sign(
      { id: loginUser.id, username: loginUser.username, email: loginUser.email },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    ),
  };
};
