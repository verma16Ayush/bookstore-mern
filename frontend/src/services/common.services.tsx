import { ILoginRes } from "../types/login_res";

export function GetCachedUserAccessToken() : string {
  try {
    return JSON.parse(localStorage.getItem('user') || '')['accessToken'];
  }
  catch (e){
    return '';
  }
}

export function CacheLoginUser(user: ILoginRes | undefined) : void {
  if(user) 
    localStorage.setItem('user', JSON.stringify(user));
}

export function DeleteCachedUser() {
  localStorage.removeItem('user');
}