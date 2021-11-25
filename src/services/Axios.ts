import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers:{
        'Content-Type':'application/json',
    }
})

export default axiosInstance