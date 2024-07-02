class HttpError extends Error {
  public status: number
  public statusText: string
  public response: Response

  constructor(response: Response) {
    super(`HTTP error! status: ${response.status}`)
    this.status = response.status
    this.statusText = response.statusText
    this.response = response
  }
}

class BaseHttpClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private buildUrl(endpoint: string): string {
    if (this.baseURL.endsWith('/') && endpoint.startsWith('/')) {
      return `${this.baseURL}${endpoint.slice(1)}`
    } else if (!this.baseURL.endsWith('/') && !endpoint.startsWith('/')) {
      return `${this.baseURL}/${endpoint}`
    } else {
      return `${this.baseURL}${endpoint}`
    }
  }

  protected async request<R>(endpoint: string, options: RequestInit = {}): Promise<R> {
    const { method = 'GET', headers = {}, body = null, cache = 'no-store' } = options

    const url = this.buildUrl(endpoint)

    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body:
        body && typeof body === 'object' && !(body instanceof FormData)
          ? JSON.stringify(body)
          : body,
      cache
    }

    try {
      const response = await fetch(url, fetchOptions)
      if (!response.ok) {
        throw new HttpError(response)
      }
      return await response.json()
    } catch (error) {
      if (error instanceof HttpError) {
        console.error('HTTP error:', error.status, error.statusText)
        const errorBody = await error.response.json()
        console.error('Error body:', errorBody)
      } else {
        console.error('Fetch error:', error)
      }
      throw error
    }
  }

  protected get<R>(endpoint: string, options: RequestInit = {}): Promise<R> {
    return this.request<R>(endpoint, { ...options, method: 'GET' })
  }

  protected post<D, R>(endpoint: string, data: D, options: RequestInit = {}): Promise<R> {
    return this.request<R>(endpoint, { ...options, method: 'POST', body: JSON.stringify(data) })
  }

  protected put<D, R>(endpoint: string, data: D, options: RequestInit = {}): Promise<R> {
    return this.request<R>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(data) })
  }

  protected delete<R>(endpoint: string, options: RequestInit = {}): Promise<R> {
    return this.request<R>(endpoint, { ...options, method: 'DELETE' })
  }
}

export default BaseHttpClient
