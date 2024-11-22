import { baseUrl, defaultHeader } from "./config"

const getCarList = async (params: string): Promise<Response> => {
   const response =  await fetch(
        `${baseUrl}/customer/v2/car${params}`, {
            method: 'GET',
            headers: defaultHeader,
        }
    )

    return response
}

const getCarById = async (id: number): Promise<Response> => {
    const response = await fetch(
        `${baseUrl}/customer/car/${id}`, {
            method: 'GET',
            headers: defaultHeader,
        }
    )

    return response
}

const carAPI = { getCarList, getCarById }

export { carAPI }