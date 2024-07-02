import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createQueryParams(params: Record<string, any>): URLSearchParams {
  const queryParams = new URLSearchParams()

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const value = params[key]

      queryParams.append(key, value.toString())
    }
  }

  return queryParams
}
