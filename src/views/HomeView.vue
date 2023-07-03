<template>
  <section id="home" class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <img
            src="https://i.postimg.cc/ZnP5Z74Y/rayhaanKhan.png"
            alt="Rayhaan Khan"
          />
        </div>
        <div class="col colT">
          <p class="text">
            I'm Mohamed Rayhaan Khan <br />
            <span>An aspiring Web Developer</span>
          </p>
          <div class="contact">
            <router-link to="/contact"><button class="btnC">Contact Me</button></router-link>
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

span {
  font-size: 2rem;
}

.text {
  font-size: 3rem;
  font-weight: bolder;
  text-shadow: 2px 1px black;
}

.btnC {
  padding: 0.4rem;
  border-radius: 2rem;
  border: 0;
}
</style>
