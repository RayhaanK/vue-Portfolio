<template>
  <section id="resume" class="resume">
    <div class="container">
      <h1 class="display-2 text-center">Resume</h1>
      <div class="container">
        <div class="row rowF">
          <div class="first">
            <div class="col colE">
              <h4 class="mb-3">EDUCATION</h4>
              <ul v-for="item in education" :key="item.ID">
                <li>
                  {{ item.title }}
                </li>
                <li class="none">
                  {{ item.year }}
                </li>
                <li class="none">
                  {{ item.description }}
                </li>
                <li class="lis"><div class="line"></div></li>
              </ul>
            </div>
          </div>
          <div class="second">
            <h4 class="text-center mb-3">SKILLS</h4>
            <div class="row rowS row-cols-1 row-cols-sm-2 row-cols-lg-3">
              <div class="col" v-for="item in skills" :key="item.ID">
                <i :class="item.icon" style="color: #84a7a1"></i>
                <p>{{ item.title }}</p>
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
    education() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");
    this.$store.dispatch("fetchSkills");
  },
};
</script>

<style scoped>
.resume {
  height: 100vh;
}
.colE {
  height: 70vh;
  display: flex;
  flex-direction: column;
}

.first {
  width: 40%;
  border-right: 1px solid #84a7a1;
}

.second {
  width: 60%;
  display: flex;
  flex-direction: column;
}

h4 {
  margin-top: 5rem;
  text-decoration: underline;
  float: left;
}

.lis {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}

.line {
  width: 60%;
  border-bottom: 2px solid #84A7A1;
  margin-top: 2.5rem;
}
.desc {
  float: left;
}

.none {
  list-style: none;
}

.rowF {
  display: flex;
  flex-direction: row;
}
.rowS {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media (max-width: 1000px) {
  .resume {
    height: max-content;
  }

  .row {
    display: flex;
    justify-content: center;
  }

  .first {
    width: 40%;
    height: max-content;
  }

  .second {
    width: 60%;
    height: max-content;
  }
}
@media (max-width: 700px) {
  .row {
    flex-direction: column;
  }

  .first {
    width: 100%;
    height: max-content;
    border: none;
  }

  .second {
    width: 100%;
    height: max-content;
  }
}
</style>
