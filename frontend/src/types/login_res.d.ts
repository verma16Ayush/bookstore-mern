import { IUserRes } from "./user_res";

export type ILoginRes = IUserRes & {accessToken: string}