import getCookie from "./getCookie";
import setCookie from "./setCookie";

export enum COOKIES {
   ACCESS_TOKEN = "accessToken",
   REFRESH_TOKEN = "refreshToken",
   _ID = "_id",
   ROLE = "role",
}

export { getCookie, setCookie };
