import { Plugin } from '@nuxt/types'
import { Api } from '~/api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: Api
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: Api
  }
}

const apiPlugin: Plugin = ({ $axios }, inject) => {
  inject('api', new Api($axios))
}

export default apiPlugin
