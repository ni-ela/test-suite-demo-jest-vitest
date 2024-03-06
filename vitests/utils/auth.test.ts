import { getAuthHeaders } from '@/utils/auth'
import { getToken } from 'next-auth/jwt';
import { vi } from 'vitest'

describe('auth', () => {

  beforeAll(() => {
    vi.mock('next-auth/jwt')
  })

  it('Deve retornar os headers corretos com token válido', async () => {
    (getToken as any).mockReturnValue({ accessToken: 'ACCESS_TOKEN' })

    let request = { headers: {} };
    let headers = await getAuthHeaders(request);

    expect(headers).toEqual({
      Authorization: 'Bearer ACCESS_TOKEN',
      'X-Request-Origin': 'COGNA_IA',
    });
  })

  it('Deve retornar os headers corretos sem token', async () => {
    (getToken as any).mockReturnValue({ accessToken: null })

    let request = { headers: {} };
    let headers = await getAuthHeaders(request);

    expect(headers).toEqual({
      Authorization: 'Bearer null',
      'X-Request-Origin': 'COGNA_IA',
    });
  });
});
