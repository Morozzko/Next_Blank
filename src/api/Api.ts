import axios from "axios";

const baseURL="https://jsonplaceholder.typicode.com/";
const headers = {
    Authorization: "",
}



export const instance = axios.create({
    baseURL,
    headers
});
