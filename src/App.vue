<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Navbar, Footer
  }
}
</script>

<style>
#app {
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

nav a:hover {
  color: #1F6E8C;
}

nav a.router-link-exact-active {
  color: #1F6E8C;
}

Footer {
  width: 100%;
}

</style>
