<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="name" class="form-label">İsim</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                  required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">E-posta Adresi</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required />
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">Kullanıcı Adı</label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  v-model="username"
                  required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Şifre</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required />
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-success">Kayıt Ol</button>
                &nbsp;
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      localStorage.setItem("name", this.name);
      localStorage.setItem("email", this.email);
      localStorage.setItem("username", this.username);
      localStorage.setItem("password", this.password);
      this.showSuccessPopup();
      this.redirectToLogin();
    },
    showSuccessPopup() {
      alert("Başarıyla Kayıt Oldunuz!");
    },
    redirectToLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
