import { baseUrl, defaultHeader } from "./config"

const getCarList = async (): Promise<Response> => {
   const response =  await fetch(
        `${baseUrl}/customer/v2/cars?`, {
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