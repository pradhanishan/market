export interface IRegisterInput {
  registerInput: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
}

export interface ILoginInput {
  loginInput: { username: string; password: string };
}

export interface IAuthPayload {
  accessToken: string | null | undefined;
}
