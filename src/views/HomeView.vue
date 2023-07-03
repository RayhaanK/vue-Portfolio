<template>
  <section id="home" class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col" data-aos="zoom-in"  data-aos-duration="1000">
          <img
            src="https://i.postimg.cc/ZnP5Z74Y/rayhaanKhan.png"
            alt="Rayhaan Khan"
          />
        </div>
        <div class="col colT" data-aos="zoom-in-right">
          <div class="text1">
            <p class="text2">
              <span class="bold">I'm,</span>
            </p>
            <p class="text2 me">
              <span class="me"> Mohamed Rayhaan Khan</span>
            </p>
          </div>
          <p class="text2">
            <span class="subT">An aspiring Web Developer</span>
          </p>
          <div class="contact">
            <router-link to="/contact"
              ><button class="btnC">Contact Me</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  height: 90vh;
}

img {
  background-color: #0e2954;
  border-radius: 50rem 20rem;
}

.container-fluid {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.colT {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45rem;
}

.text2 {
  padding-inline: 0.4rem;
  font-size: 3rem;
  font-weight: bolder;
  text-shadow: 2px 1px black;
}

.btnC {
  padding: 0.4rem;
  border-radius: 2rem;
  border: 0;
  background-color: #64ffda;
}

.subT {
  text-align: center;
  font-size: 2rem;
}

.bold {
  color: #64ffdaff;
}

.text1 {
  display: flex;
}

.me {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: typing 1.4s steps(20), cursor 0.4s step-end infinite alternate;
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}
@keyframes typing {
  from {
    width: 0;
  }
}
</style>
