import axios from "axios";

export const getContentType = () => ({
    'Content-Type': 'application/json'
})

export const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: getContentType()
})