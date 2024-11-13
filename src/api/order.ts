import { authHeader, baseUrl } from "./config"

export const getOrderById = async (id: number, token: string): Promise<Response> => {
    const response = await fetch(
        `${baseUrl}/customer/order/${id}`, {
            method: 'GET',
            headers: {
                ...authHeader(token),
            },
        }
    )

    if (!response.ok) {
        throw new Error('Failed to fetch order id')
    }

    return response
}

export const postOrder = async<T> (token: string, data: T ) => {
    const response = await fetch(
        `${baseUrl}/customer/order`, {
            method: 'POST',
            headers: {
                ...authHeader(token),
            },
            body: JSON.stringify(data),
        }
    )

    if(!response.ok) {
        throw new Error('Failed to create order')
    }   

    return response
}

export const putSlipOrder = async (id: number, token: string, formData: FormData): Promise<Response> => {
    const response = await fetch(
        `${baseUrl}/customer/order/${id}/slip`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        }
    )

    if (!response.ok) {
        throw new Error('Failed to upload slip')
    }

    return response
}