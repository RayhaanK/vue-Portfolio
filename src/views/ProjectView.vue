<template>
  <section id="projects" class="projects">
    <div class="container">
      <h1 class="display-2 text-center">Projects</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div
          class="col g-4 mb-4"
          v-for="item in projects"
          :key="item.ID"
          data-aos="fade-up"
        >
          <div class="card">
            <div class="image mb-2">
              <img
                :src="item.Image"
                class="card-img-top"
                :alt="item.Title"
                loading="lazy"
              />
            </div>
            <div class="line"></div>
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.Title }}</h5>
              <p class="card-text">
                {{ item.Description }}
              </p>
              <div class="links">
                <a :href="item.GitHub" class="card-link">GitHub</a>
                <a :href="item.Netlify" class="card-link">Live Server</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },
};
</script>

<style scoped>
.projects {
  height: 150vh;
  display: flex;
  justify-content: center;
}

.col {
  display: flex;
  justify-content: center;
  align-content: center;
}

.card {
  background-color: #0e2954;
  color: #84a7a1;
  width: 23rem;
  height: 25rem;
  border-radius: 1.5rem;
}

.card-title {
  height: 50px;
  border-bottom: 1px solid #64ffda;
}

.image {
  display: flex;
  justify-content: center;
  background-size: contain;
  margin-top: 1rem;
}

img {
  display: flex;
  justify-content: center;
  height: 140px;
  width: 250px;
  border-radius: 1rem;
}

.card-text {
  height: 72px;
  margin-bottom: 2rem;
  display: flex;
  text-align: center;
  overflow: auto;
}

.links {
  text-align: center;
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
  color: #64ffda;
}

a:hover {
  color: #84a7a1;
}

@media (max-width: 1500px) {
  .projects {
    height: max-content;
  }
}
</style>
