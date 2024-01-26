// Login
export interface ILoginParams {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ILoginResponse {
  user: IUser;
  accessToken: string;
  refreshToken?: string;
}

// Register
export interface IRegisterParams {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  password: string;
}

export interface IRegisterResponse extends ILoginResponse {}

export interface IRefreshTokenResponse extends ILoginResponse {}

export interface IUser {
  id: string;
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  emailVerifiedAt: string;
}
export interface IForgotPassword {
  email: string;
}
export interface IResetPassword {
  email: string | string[] | undefined;
  password: string;
  token: string | string[] | undefined;
}
export interface ICourse {
  id: number;
  uuid: string;
  name: string;
  description: string;
  image: string;
  platformExternalUrl: string;
  platformId: number;
  customId: number;
  courseUrl: string;
  courseToken: string;
  progress: string;
}
export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
}
export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
