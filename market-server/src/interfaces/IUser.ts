export interface IRegisterInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginInput {
  username: string;
  password: string;
}

export interface IAuthPayload {
  accessToken: string | null | undefined;
}
