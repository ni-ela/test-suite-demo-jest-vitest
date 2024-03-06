import { getAuthHeaders } from '@/utils/auth'

describe('auth', () => {
  it('Deve retornar os headers corretos com token válido', async () => {
    require('next-auth/jwt').getToken.mockResolvedValueOnce({ accessToken: 'ACCESS_TOKEN' });

    let request = { headers: {} };
    let headers = await getAuthHeaders(request);

    expect(headers).toEqual({
      Authorization: 'Bearer ACCESS_TOKEN',
      'X-Request-Origin': 'COGNA_IA',
    });
  })

  it('Deve retornar os headers corretos sem token', async () => {
    require('next-auth/jwt').getToken.mockResolvedValueOnce({ accessToken: null });

    let request = { headers: {} };
    let headers = await getAuthHeaders(request);

    expect(headers).toEqual({
      Authorization: 'Bearer null',
      'X-Request-Origin': 'COGNA_IA',
    });
  });
});
