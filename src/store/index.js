import { createStore } from "vuex";

const dataUrl = "https://rayhaank.github.io/vuePortflio-JSONserver/data.json";

export default createStore({
  state: {
    skills: null,
    education: null,
    projects: null,
    testimonials: null,
  },
  getters: {},
  mutations: {
    setSkills(state, value) {
      state.skills = value;
    },
    setEducation(state, value) {
      state.education = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    },
  },

  actions: {
    async fetchSkills(context) {
      try {
        let res = await fetch(dataUrl);
        let { skills } = await res.json();
        if (skills) {
          context.commit("setSkills", skills);
        } else {
          context.commit("setSkills", skills);
        }
      } catch (e) {
        console.log(e.message)
      }
    },
    async fetchEducation(context) {
      try {
        let res = await fetch(dataUrl);
        let { education } = await res.json();
        if (education) {
          context.commit("setEducation", education);
        } else {
          context.commit("setEducation", education);
        }
      } catch (e) {
        console.log(e.message)
      }
    },
    async fetchProjects(context) {
      try {
        let res = await fetch(dataUrl);
        let { projects } = await res.json();
        if (projects) {
          context.commit("setProjects", projects);
        } else {
          context.commit("setProjects", projects);
        }
      } catch (e) {
        console.log(e.message)
      }
    },
    async fetchTestimonials(context) {
      try {
        let res = await fetch(dataUrl);
        let { testimonials } = await res.json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials);
        } else {
          context.commit("setTestimonials", testimonials);
        }
      } catch (e) {
        console.log(e.message)
      }
    },
  },
  modules: {},
});
