export const 
LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const 
USER_AVATAR = "https://avatars.githubusercontent.com/u/119121732?v=4"

export const 
BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const POSTER_IMG_URL = "https://image.tmdb.org/t/p/w500"

export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB
    }
  };

  export const SUPPORTED_LANGUAGE = 
  [{identifier:"en", name:"English"},
  {identifier:"hindi", name:"Hindi"},
  {identifier:"spanish", name:"Spanish"}]
  

  export const OPENAPI_KEY = process.env.REACT_APP_OPENAPI_KEY