import { baseUrl, defaultHeader } from "./config"
export const login = async (credentials: { email: string; password: string }) => {
  const response = await fetch(`${baseUrl}/customer/auth/login`, {
    method: 'POST',
    headers: defaultHeader,
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Failed to login');
  }

  return response;
};

export const register = async (token: string): Promise<Response> => {
  const response = await fetch(`${baseUrl}/customer/auth/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Logout failed');
  }

  return response;
};
