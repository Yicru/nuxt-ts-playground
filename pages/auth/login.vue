<template>
  <div>
    <button @click="login">login</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  email: string
  password: string
}

export default Vue.extend({
  data(): Data {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const { data } = await this.$api.login({
          email: this.email,
          password: this.password,
        })

        console.log(data.access_token)
      } catch (e) {
        console.error(e)
      }
    },
  },
})
</script>
