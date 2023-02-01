import { Prisma, PrismaClient } from "@prisma/client";
import { GraphQLError } from "graphql";
import { errorCodes } from "../../constants/errorCodes.js";
import { IRegisterInput, IAuthPayload } from "../../interfaces/IUser.js";
import { genSaltSync, hashSync } from "bcryptjs";
import * as jwt from "jsonwebtoken";
export const register = async (
  parent: any,
  { username, email, password, confirmPassword }: IRegisterInput,
  {
    prisma,
  }: {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
  }
): Promise<IAuthPayload> => {
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
  var passwordSalt = genSaltSync(10);
  var passwordHash = hashSync(password, passwordSalt);
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
