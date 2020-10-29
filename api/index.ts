/* eslint-disable camelcase */
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export class Api {
  private readonly axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  login(data: { email: string; password: string }) {
    return this.axios.post<{
      access_token: string
      token_type: string
      expires_in: number
    }>('/auth/login', data)
  }
}
