<template>
  <div class="container mt-3">
    <div class="row mb-3 d-flex justify-content-end">
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="Ürün Ara..."
          v-model="searchQuery"
          @input="searchProducts" />
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-4 mb-3"
        v-for="product in filteredProducts"
        :key="product.id">
        <div class="card" style="height: 400px">
          <img
            :src="product.image"
            class="card-img-top"
            alt="Product Image"
            style="height: 200px; object-fit: contain" />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.price }} TL</p>
            <button class="btn btn-primary" @click="addToCart(product)">
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.getters.products;
    },
    filteredProducts() {
      return this.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
      console.log(product);
    },
    fetchProducts() {
      this.$store.dispatch("fetchProducts");
    },
    searchProducts() {},
  },
};
</script>
