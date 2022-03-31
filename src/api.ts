import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
})

export const getMe = async () => {
    const response = await api.get('/me')
    return response.data
}
