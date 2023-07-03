<template>
  <section id="projects" class="projects">
      <div class="container">
        <h1 class="display-2 text-center">Projects</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col" v-for="item in projects" :key="item.ID" data-aos="fade-up">
          <div class="card">
            <img
              :src="item.Image"
              class="card-img-top"
              :alt="item.Title"
              loading="lazy"
            />
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.Title }}</h5>
              <p class="card-text">
                {{ item.Description }}
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
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
    height: 170vh;
    display: flex;
    justify-content: center;
}

.card {
    background-color: #0e2954;
    color: #84A7A1;
}

.card-title {
    height: 50px;
    border-bottom: 1px solid #84A7A1;
}

.card-text {
    height: 130px;
    margin-bottom: 2rem;
    display: flex;
    text-align: center;
    /* align-items: center; */
    overflow: auto;
}
</style>
