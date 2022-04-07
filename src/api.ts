import axios, { AxiosInstance, AxiosResponse } from 'axios'

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
})

export const getMe = async (): Promise<AxiosResponse<string, string>> => {
    const response = await api.get('/me')
    return response
}
