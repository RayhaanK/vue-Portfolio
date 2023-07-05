<template>
  <section id="contact" class="contact">
    <div class="container-fluid">
      <h1 class="display-2 text-center">Contact Me</h1>
    </div>
    <div class="container-fluid contactMe" data-aos="zoom-in" data-aos-duration="1000">
      <form action="https://formspree.io/f/xyyaoapj" method="POST">
        <div class="mb-1 p-3 mt-4">
          <label for="exampleFormControlInput1" class="form-label"
            >First Name:</label
          >
          <input
            type="First Name"
            name="First Name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>
        <div class="mb-1 p-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Last Name:</label
          >
          <input
            type="Last Name"
            name="Last Name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Surname
            "
          />
        </div>
        <div class="mb-3 p-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Email address:</label
          >
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3 p-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Please leave a message:</label
          >
          <textarea
            name="message"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <div class="btn0">
            <button class="formButton mt-3 btn1" type="submit">Send</button>
            <button class="formButton mt-3 btn2" type="reset">Clear</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  width: 70%;
}
.contactMe {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

label {
  color: #84a7a1;
}

.btn0 {
  display: flex;
  justify-content: space-evenly;
}

.btn1,
.btn2 {
  padding: 0.3rem;
  border-radius: 1rem;
  border: none;
  width: 5rem;
  background-color: #0e2954;
  color: #84a7a1;
}

.btn1:hover {
  background-color: #84a7a1;
  color: #0e2954;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.1);
}
.btn2:hover {
  background-color: #84a7a1;
  color: #0e2954;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.1);
}

@media (max-width: 370px) {
  .btn1 {
    margin-right: 0.3rem;
  }
}
</style>
