import axios, { AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
    baseURL: process.env.NEXT_API_URL,

})

//for orval 
export const createInstance = async <T>
    (config: AxiosRequestConfig, options?: AxiosRequestConfig

    ): Promise<T> => {

    return apiInstance({
        ...config,
        ...options

    }).then(r => r.data)
}