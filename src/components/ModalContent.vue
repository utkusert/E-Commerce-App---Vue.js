<template>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-item">
      <p v-if="cart.length > 0">Sepet İçeriği:</p>
      <ul v-if="cart.length > 0" class="list-group">
        <li
          v-for="(item, index) in cart"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <span>{{ item.title }}</span>
            <span class="badge bg-primary rounded-pill ml-3">{{
              item.quantity
            }}</span>
          </div>
          <div>
            <span>{{ item.price * item.quantity }} TL</span>
            <button
              class="btn btn-danger btn-sm ms-2"
              @click="removeFromCart(item.id)">
              -
            </button>
            <button
              class="btn btn-success btn-sm ms-2"
              @click="addToCart(item)">
              +
            </button>
          </div>
        </li>
      </ul>
      <p v-else class="text-center">Sepetiniz boş.</p>
      <div class="d-flex justify-content-end mt-3">
        <p v-if="cart.length" class="total-price">{{ totalPrice }} TL</p>
        <button class="btn btn-primary me-2" @click="toggleModal">Kapat</button>

        <button
          v-if="cart.length"
          class="btn btn-danger me-2"
          @click="emptyCart">
          Sıfırla
        </button>
        <button v-if="cart.length" class="btn btn-success" @click="handleOrder">
          Sipariş Ver
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ModalContent",
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
  },
  setup() {
    const store = useStore();
    const isModalOpen = computed(() => {
      return store.getters.isModalOpen;
    });

    const toggleModal = () => {
      store.dispatch("toggleModal");
    };

    const removeFromCart = (id) => {
      store.dispatch("removeFromCart", id);
    };
    const addToCart = (product) => {
      store.dispatch("addToCart", product);
    };
    const emptyCart = () => {
      store.dispatch("emptyCart");
    };
    const handleOrder = () => {
      alert("Başarıyla sipariş verdiniz!");
      toggleModal();
      emptyCart();
    };
    const totalPrice = computed(() => {
      return store.getters.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    });

    return {
      isModalOpen,
      toggleModal,
      removeFromCart,
      addToCart,
      emptyCart,
      handleOrder,
      totalPrice,
    };
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-item {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  position: relative;
}

.list-group {
  margin-top: 10px;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-price {
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  left: 30px;
}
</style>
