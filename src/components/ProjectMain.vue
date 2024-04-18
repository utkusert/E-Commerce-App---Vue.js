<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card text-center">
          <img
            :src="logoPng"
            alt="Logo"
            class="card-img-top"
            style="max-height: 50%; max-width: 50%" />
          <div class="card-body">
            <h5 class="card-title">Bu sayfa techcareer.net projesidir.</h5>
            <p class="card-text">
              <span v-if="!isAuthenticated"
                >Devam etmek için giriş yapınız.</span
              >
              <span v-else>Hoşgeldiniz, {{ storedUsername }}</span>
            </p>
            <router-link
              v-if="!isAuthenticated"
              to="/login"
              class="btn btn-success"
              >Giriş Sayfasına Git</router-link
            >
            <div v-else>
              <router-link to="/products" class="btn btn-success"
                >Ürünlere Git</router-link
              >
              &nbsp;
              <button @click="logout" class="btn btn-danger">Çıkış Yap</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoPng from "../assets/logo.png";

export default {
  name: "MainPage",
  data() {
    return {
      logoPng: logoPng,
      storedUsername: "",
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
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    getStoredData() {
      this.storedUsername = localStorage.getItem("username") || "Bulunamadı";
    },
  },
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>
