<template>
  <section id="home" class="home">
    <div class="container-fluid">
        <div class="row">
          <div class="col "> <img src="https://i.postimg.cc/ZnP5Z74Y/rayhaanKhan.png" alt="Rayhaan Khan"></div>
          <div class="col colT"><p class="text">I'm Mohamed Rayhaan Khan <br> <span>An aspiring Web Developer</span></p></div>
        </div>
      </div>
      <!-- <div class="container">
        <div class="image">
          <img src="https://i.postimg.cc/ZnP5Z74Y/rayhaanKhan.png" alt="Rayhaan Khan">
        </div>
        <div class="imageText"><p class="text">I'm Mohamed Rayhaan Khan <br> <span>An aspiring Web Developer</span></p></div>
        <button class="btn1">Contact Me!</button>
      </div> -->
      <!-- <div class="card carrdd">
        <div class="backgroundImg"></div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div> -->
     <!-- </div> -->
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  height: 90vh;
}
.carrdd{
  width: 20rem;
}
/* 
.backgroundImg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  border: 1px solid red;
  background-size: cover;
  background-image: url(https://i.postimg.cc/ZnP5Z74Y/rayhaanKhan.png);
  background-repeat: no-repeat;
} */
 
img {
  background-color: #0E2954;
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


</style>
