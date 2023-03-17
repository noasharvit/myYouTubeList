//https://www.w3schools.com/js/js_cookies.asp
import { USER_INFO } from "./App";
let userStorage = {UUID : '', VIDEOS_IDS : [] }

export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
 export function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  export function initCookie() {
    const currentUuidCookie = getCookie(USER_INFO);
    if(currentUuidCookie !=='')console.log("cookie is already exist. uuid = " + JSON.parse(currentUuidCookie).UUID)
    if(currentUuidCookie === '' || JSON.parse(currentUuidCookie).UUID === '') {
      userStorage.UUID = crypto.randomUUID();
      userStorage.VIDEOS_IDS = [];
      setCookie(USER_INFO,JSON.stringify(userStorage), 365 )
      console.log("cookie is init. uuid = " + userStorage.UUID )
      return true
    }
    else{
      console.log("cookie is already exist. uuid = " + JSON.parse(currentUuidCookie).UUID)
      return false
    }
  }

  export function parseCookie() {
    let cookieOfUserInfo = getCookie(USER_INFO);
    return JSON.parse(cookieOfUserInfo)
  }

  export function addVideosToCurrentCookie(prevVideos,newVideo){
    userStorage.UUID = JSON.parse(getCookie(USER_INFO)).UUID
    userStorage.VIDEOS_IDS = [...prevVideos, newVideo];
    setCookie(USER_INFO,JSON.stringify(userStorage), 365 )
  }