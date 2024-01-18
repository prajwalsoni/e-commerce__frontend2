import axios from "axios"

export const API_BASE_URL = 'e-commercebackend-production-31f3.up.railway.app'

const jwt = localStorage.getItem("jwt")

export const api=axios.create({
    baseURL:API_BASE_URL,
    headers: {
        "Authorization":`Bearer ${jwt}`,
        'Content-Type':"application/json"
    }
})

