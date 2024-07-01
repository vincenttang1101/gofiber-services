type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url: string
  data?: any
  headers?: Record<string, string>
}

class HttpClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  request<T>(options: RequestOptions): Promise<T> {
    const { method = 'GET', url, data = null, headers = {} } = options

    return fetch(`${this.baseUrl}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: data ? JSON.stringify(data) : null
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`)
      }
      return response.json() as Promise<T>
    })
  }

  get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>({ url, headers })
  }

  post<T>(url: string, data: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>({ method: 'POST', url, data, headers })
  }

  put<T>(url: string, data: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>({ method: 'PUT', url, data, headers })
  }

  delete<T>(url: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>({ method: 'DELETE', url, headers })
  }
}

export default HttpClient
