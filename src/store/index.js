import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isAuthenticated: false,
    modalOpen: false,
    products: [],
    cart: [],
  },
  mutations: {
    setAuth(state, value) {
      state.isAuthenticated = value;
    },
    toggleModal(state) {
      state.modalOpen = !state.modalOpen;
    },
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingCartItemIndex > -1) {
        state.cart[existingCartItemIndex].quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, id) {
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === id
      );
      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem.quantity === 1) {
        state.cart.splice(existingCartItemIndex, 1);
      } else {
        existingCartItem.quantity--;
      }
    },
    emptyCart(state) {
      state.cart = [];
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        commit("setProducts", response.data);
      } catch (error) {
        console.log("Occurred Errors When Fetching Products", error);
      }
    },

    login({ commit }) {
      commit("setAuth", true);
    },
    logout({ commit }) {
      commit("setAuth", false);
    },
    toggleModal({ commit }) {
      commit("toggleModal");
    },
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    removeFromCart({ commit }, id) {
      commit("removeFromCart", id);
    },
    emptyCart({ commit }) {
      commit("emptyCart");
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    isModalOpen: (state) => state.modalOpen,
    products: (state) => state.products,
    cart: (state) => state.cart,
  },
});
