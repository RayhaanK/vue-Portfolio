<template>
  <section id="contact" class="contact">
    <!-- <div
      class="container-fluid contactMe"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <form action="https://formspree.io/f/xyyaoapj" method="POST">
        <div class="mb-1 p-3 mt-4">
          <label for="name" class="form-label">First Name:</label>
          <input
            type="First Name"
            name="First Name"
            class="form-control"
            id="name"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="mb-1 p-3">
          <label for="surname" class="form-label">Last Name:</label>
          <input
            type="Last Name"
            name="Last Name"
            class="form-control"
            id="surname"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="mb-3 p-3">
          <label for="email" class="form-label">Email address:</label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="email"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Email')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="mb-3 p-3">
          <label for="feedback" class="form-label"
            >Please leave a message:</label
          >
          <textarea
            name="message"
            class="form-control"
            id="feedback"
            rows="3"
            required
            oninvalid="this.setCustomValidity('Please Enter Feedback')"
            oninput="this.setCustomValidity('')"
          ></textarea>
          <div class="btn0">
            <button class="formButton mt-3 btn1" type="submit">Send</button>
            <button class="formButton mt-3 btn2" type="reset">Clear</button>
          </div>
        </div>
      </form>
    </div> -->
    <div class="container-fluid contC">
      <div
        class="container-fluid contactMe"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <form action="https://formspree.io/f/xyyaoapj" method="POST">
          <div class="mt-4">
            <label for="name" class="form-label white">First Name:</label>
            <input
              type="First Name"
              name="First Name"
              class="form-control"
              id="name"
              required
              oninvalid="this.setCustomValidity('Please Enter Your Name')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="mt-4">
            <label for="surname" class="form-label white">Last Name:</label>
            <input
              type="Last Name"
              name="Last Name"
              class="form-control"
              id="surname"
              required
              oninvalid="this.setCustomValidity('Please Enter Your Last Name')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="mt-4">
            <label for="email" class="form-label white">Email address:</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="email"
              required
              oninvalid="this.setCustomValidity('Please Enter Your Email')"
              oninput="this.setCustomValidity('')"
            />
          </div>
          <div class="mt-4">
            <label for="feedback" class="form-label white"
              >Please leave a message:</label
            >
            <textarea
              name="message"
              class="form-control"
              id="feedback"
              rows="3"
              required
              oninvalid="this.setCustomValidity('Please Enter Feedback')"
              oninput="this.setCustomValidity('')"
            ></textarea>
            <div class="btn0">
              <button class="formButton mt-3 btn1" type="submit">Send</button>
              <button class="formButton mt-3 btn2" type="reset">Clear</button>
            </div>
          </div>
        </form>
        <div
          class="cardContact d-flex justify-content-center align-items-center mt-5 mt-xl-0"
        >
          <div class="card inf1">
            <div class="container inf">
              <div class="vstack gap-2">
                <div class="p-1 ">
                    <h4>069 120 7294</h4>
                </div>
                <div class="p-1 ">
                    <h4>rayhaankhan04@gmail.com</h4>
                </div>
                <div class="p-1">
                  <h4>Find me on:</h4>
                  <a
                    href="https://www.linkedin.com/in/rayhaan-khan-9ba792263/"
                    target="_blank"
                    ><i
                      class="fa-brands fa-linkedin fa-2xl"
                      style="color: #84a7a1"
                    ></i
                  ></a>
                  <a href="https://github.com/RayhaanK" target="_blank"
                    ><i
                      class="fa-brands fa-square-github fa-2xl"
                      style="color: #84a7a1"
                    ></i
                  ></a>
                  <a href="https://codepen.io/SquidK" target="_blank"
                    ><i class="fa-brands fa-codepen fa-2xl" style="color: #84a7a1"></i>
                  </a>
                </div>
              </div>
            </div>
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
.contact {
  min-height: 95vh;
}

form {
  width: 50%;
}
.contactMe {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
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
  background-color: #141c27;
  color: #84a7a1;
}
.btn1:hover {
  background-color: #0a0d12;
  color: #84a7a1;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.1);
}
.btn2:hover {
  background-color: #0a0d12;
  color: #84a7a1;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  transform: scale(1.1);
}

.inf1 {
  background-color: #141c27;
  color: #84a7a1;
  width: 80%;
  height: 400px;
  border: 1px solid #f5f7f7;
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  display: flex;
  justify-content: center;
  text-align: center;
}

.inf1:hover {
  transform: scale(1.05);
}

.white {
  color: #f5f7f7 !important;
}

.cardContact {
  width: 45%;
}

i {
  padding: 0.7rem;
  margin-top: 1rem;
  margin-bottom: 0.4rem;
}

i:hover {
  transition: all 0.9s cubic-bezier(0.15, 0.83, 0.66, 1);
  transform: scale(1.3);
}

@media (max-width: 1000px) {
  .contactMe {
    flex-direction: column;
  }

  form {
    width: 100%;
  }
  .cardContact {
    width: 100%;
  }
}

@media (max-width: 370px) {
  .btn1 {
    margin-right: 0.3rem;
  }
}
</style>
