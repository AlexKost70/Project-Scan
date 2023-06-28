import axios from "axios";

let token = localStorage.getItem("token");

export default axios.create({
    baseURL: "https://gateway.scan-interfax.ru/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }   
});