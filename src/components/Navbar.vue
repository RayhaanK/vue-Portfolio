<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg mx-auto">
      <div class="container-fluid">
        <button
          class="navbar-toggler mx-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/resume">Resume</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/project">Projects</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/testimonial">Testimonials</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    position: sticky;
    top: 0;
    z-index: 1;

}
.navbar {
    margin-top: 0.5rem;
    width: 56%;
    border-radius: 2rem;
    background-color: #141c27;
}

li {
    padding: 0.7rem;
}

button {
    background-color: #1F6E8C;
}

@media (max-width: 992px) {
  .container {
    position: relative;
    width: 100%;
}

.navbar {
  width: 100%;
  text-align: center;
}
}
</style>
