import BaseHttpClient from '@/services/base-http-client.service'

class BearerAuthHttpClient extends BaseHttpClient {
  private accessToken: string | null = null

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken
  }

  protected async request<R>(endpoint: string, options: RequestInit = {}): Promise<R> {
    const headers = {
      ...options.headers,
      ...(this.accessToken ? { Authorization: `Bearer ${this.accessToken}` } : {})
    }

    return super.request<R>(endpoint, { ...options, headers })
  }
}

export default BearerAuthHttpClient
