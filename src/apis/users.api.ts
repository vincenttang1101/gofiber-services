import BearerAuthHttpClient from '@/services/bearer-auth-http-client.service'

class UsersClient extends BearerAuthHttpClient {
  constructor() {
    super('https://api.escuelajs.co/api/v1/auth')
  }

  async login(body: { email: string; password: string }) {
    const response = await this.post<
      { email: string; password: string },
      { access_token: string; refresh_token: string }
    >('/login', body)

    this.setAccessToken(response.access_token)
    return response
  }

  async getUserProfile() {
    const response = await this.get<{
      id: string
      email: string
      password: string
      name: string
      role: string
      avatar: string
    }>('/profile')
    return response
  }
}

const usersApi = new UsersClient()
export default usersApi
