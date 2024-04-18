<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4" v-if="!isAuthenticated">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="login">
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
                <button type="submit" class="btn btn-success">Giriş Yap</button>
                &nbsp;
                <router-link to="/register" class="btn btn-secondary">
                  Kayıt Ol
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-else>
        <div class="card">
          <div class="card-body">
            <h3>Welcome, {{ storedUsername }}</h3>
            <button @click="logout" class="btn btn-danger">Logout</button>
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
      username: "",
      password: "",
      email: "",
      name: "",
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  created() {
    this.getStoredData();
  },
  methods: {
    login() {
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      if (
        this.username === storedUsername &&
        this.password === storedPassword
      ) {
        this.$router.push("/products");
        this.$store.dispatch("login");
      } else {
        alert("Kullanıcı adı veya şifre yanlış!");
      }
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    getStoredData() {
      this.storedUsername = localStorage.getItem("username") || "Bulunamadı";
      this.storedPassword = localStorage.getItem("password") || "Bulunamadı";
    },
  },
};
</script>

<style></style>
