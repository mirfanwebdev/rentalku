export const baseUrl = 'https://api-car-rental.binaracademy.org'

export const defaultHeader = {
    'Content-Type': 'application/json',
}

export const authHeader = (token: string) => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
})
