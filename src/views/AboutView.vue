<template>
  <section id="about" class="about">
    <div class="container mt-5">
      <div class="container" data-aos="fade-right">
        <div class="row mt-3">
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4 colI line">
                  <img
                    src="https://i.postimg.cc/0NYJhdSq/rayhaan-Khan-About1.png"
                    class="img-fluid"
                    alt="Rayhaan Khan"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Rayhaan Khan</h5>
                    <p class="card-text">
                      My name is Mohamed Rayhaan Khan. <br />
                      My date of birth is 18/04/2004. <br />
                      My home language is English and I can speak Afrikaans too.
                      <br />
                      I currently live in Cape Town. <br />
                      My hobbies include a variety of things. I enjoy going
                      outdoors, interacting with friends, listening to music,
                      playing games, and coding. <br />
                      Over the years I had faced many challenges that I had to
                      overcome and because of this i gained a lot of new skills
                      that has further improved my potential. These skills
                      include being able to work as a leader or as a member,
                      being able to be resilient in all situations. I also have
                      great communication skills and with that I will be able to
                      work with anyone new.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="links" data-aos="fade-left">
        <a
          href="https://drive.google.com/file/d/1ZqAWPHu4wzKdGO80qUm5uxg9I0hg9-Qs/view?usp=sharing"
          target="_blank"
          ><button class="btn1">
            <i class="fa-solid fa-file-pdf fa-2xl" style="color: #84a7a1"></i
            >View My CV
          </button></a
        >
        <router-link to="/resume"
          ><button class="btn1">
            <i class="fa-solid fa-paper-plane fa-2xl" style="color: #84a7a1"></i
            >View My Resume
          </button></router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  height: 100vh;
}
.colI {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24rem;
}

.card {
  background-color: #0e2954;
  color: #84a7a1;
  border-radius: 2rem;
}

.card:hover {
  transform: scale(1);
  transition: ease-in 0.2s;
}

img {
  height: 19rem;
}

.line {
  border-right: 1px solid #84a7a1;
}

.card-title {
  text-decoration: underline;
  font-size: 2rem;
}

.card-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
}

button {
  background-color: #0e2954;
  color: #84a7a1;
  border-radius: 1rem;
  padding: 0.7rem;
  border: 0;
  margin: 0.7rem;
  width: 13rem;
}

button:hover {
  background-color: #001847;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.1);
}

.links {
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 768px) {
  .about {
    height: max-content;
  }

  .colI {
    height: 19rem;
  }
  .line {
    border: 0;
  }
  .card {
    height: max-content;
  }
  .card-text {
    height: max-content;
  }

  img {
    border-bottom: 1px solid #84a7a1;
  }

  .links {
    justify-content: space-between;
  }
}

@media (max-width: 530px) {
  .about {
    height: max-content;
  }

  button {
    padding: 0.6rem;
    margin: 0rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    width: 9.5rem;
  }
  button:hover {
    transition: none;
    transform: none;
  }
  .card:hover {
    transform: none;
    transition: none;
  }
}
</style>
