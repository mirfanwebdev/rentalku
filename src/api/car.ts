import { baseUrl, defaultHeader } from "./config"

export const getCarList = async (): Promise<Response> => {
   const response =  await fetch(
        `${baseUrl}/customer/v2/cars?`, {
            method: 'GET',
            headers: defaultHeader,
        }
    )

    if(!response.ok) {
        throw new Error('Failed to fetch car list')
    }

    return response
}

export const getCarById = async (id: number): Promise<Response> => {
    const response = await fetch(
        `${baseUrl}/customer/car/${id}`, {
            method: 'GET',
            headers: defaultHeader,
        }
    )

    if (!response.ok) {
        throw new Error('Failed to fetch car id')
    }

    return response
}