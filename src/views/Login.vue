<template>
  <div class="px-4 py-4">
    <button @click="auth0Login()" class="bg-blue-600 text-white px-4 py-1 rounded">Login</button>
  </div>  
</template>

<script>
export default {
  name: "Login",
  methods: {
    auth0Login() {
      this.$store.dispatch("auth0Login");
    }
  }
}
</script>