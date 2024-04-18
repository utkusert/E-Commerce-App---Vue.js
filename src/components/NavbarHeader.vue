<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">E-Ticaret</router-link>
      </div>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Ana Sayfa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Ürünler</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <div v-if="isAuthenticated" class="d-flex align-items-center">
              <span>{{ storedUsername }}</span>
              &nbsp;
              <img
                style="cursor: pointer"
                @click.prevent="toggleModal"
                src="@/assets/cart.svg" />
            </div>
            <router-link v-else to="/login" class="nav-link"
              >Giriş Yapınız !</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarHeader",
  data() {
    return {
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
    getStoredData() {
      this.storedUsername = localStorage.getItem("username") || "Bulunamadı";
    },
    toggleModal() {
      this.$store.dispatch("toggleModal");
    },
  },
};
</script>

<style>
.navbar {
  background-color: #28a745;
}

.navbar-brand {
  color: #fff;
}

.navbar-nav .nav-link {
  color: #fff;
}

.navbar-nav .nav-link:hover {
  color: #ccc;
}

.navbar-header {
  margin-right: auto;
}

.navbar-nav:last-child {
  margin-left: auto;
}

.navbar-nav .d-flex {
  display: inline-flex;
  align-items: center;
}
</style>
