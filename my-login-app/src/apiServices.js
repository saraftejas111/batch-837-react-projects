import axios from "axios";

export const loginUser =  (userCredentials) => axios.post(`http://localhost:8080/login-user` , userCredentials) ; 