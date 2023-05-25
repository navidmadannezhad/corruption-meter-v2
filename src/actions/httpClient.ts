import axios from "axios";

const httpClient = () => {
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_CLIENT_URL
    })
    return instance;
}

export default httpClient;