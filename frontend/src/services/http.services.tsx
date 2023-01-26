import { API_PATHS, BASE_API, HTTP_METHODS } from "../const";
import { ILoginRes } from "../types/login_res";
import { ISignupRes } from "../types/signup_res";
import { IUserRes } from "../types/user_res";

export async function GetUser(accessToken: string) : Promise<IUserRes | void> {
  const url = API_PATHS.user;
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${accessToken}`)
  const requestOptions = {
    method: HTTP_METHODS.GET,
    headers: headers,
  }
  return fetch(url, requestOptions).then(res => res.json())
}


export async function SignUp(name: string, email: string, password: string) : Promise<ISignupRes> {
  const url = `${BASE_API}${API_PATHS.signup}`;
  const headers = new Headers();
  headers.append("Content-type", "application/json")
  const requestOptions = {
    method: HTTP_METHODS.POST,
    headers: headers,
    body: JSON.stringify({
      name,
      email,
      password
    })
    
  }
  return fetch(url, requestOptions).then(response => {
    if(response?.ok)
      return response.json();
    else throw new Error('something went wrong');
  }).catch((e)=> {throw new Error('something went wrong')})
}

export async function LogIn(email: string, password: string) : Promise<ILoginRes | undefined> {
  const url = `${BASE_API}${API_PATHS.login}`;
  const headers = new Headers();
  headers.append("Content-type", "application/json");
  const requestOptions = {
    method: HTTP_METHODS.POST,
    headers: headers,
    body: JSON.stringify({
      email, 
      password
    })
  }
  return fetch(url, requestOptions).then(response => {
    if(response?.ok)
      return response.json();
    else throw new Error('couldnt login. something went wrong');
  }).catch((e)=>{
    console.log(e);
  })
}

export async function LogOut() {
  const url = `${BASE_API}${API_PATHS.logout}`
  const headers = new Headers();
  headers.append("Content-type", "application/json");
  const requestOptions = {
    method: HTTP_METHODS.DELETE,
    headers: headers,
  }
  return fetch(url, requestOptions).then(response => console.log(response))
  
}