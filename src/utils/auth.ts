import { getToken, JWT } from 'next-auth/jwt'

export const getAuthHeaders = async (request: any) => {
    const token: JWT | null = await getToken({ req: request })
    return {
        Authorization: `Bearer ${token?.accessToken}`,
        'X-Request-Origin': 'COGNA_IA'
    }
}