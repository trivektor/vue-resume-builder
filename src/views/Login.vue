<template>
  <div>
    <button @click="auth0Login()">Login</button>
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