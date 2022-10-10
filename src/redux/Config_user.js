import axios from "axios";
let isLogin = localStorage.getItem("userToken");
console.log(44444444, isLogin);
export const instance = axios.create({
  baseURL: "https://secondmorelive.herokuapp.com",

  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${isLogin}`,
  },
});
