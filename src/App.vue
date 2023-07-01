<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #84A7A1;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #84A7A1;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #1F6E8C;
}
</style>
