<template>
  <div class="delivery-form">
    <h2>Delivery Details</h2>
    <form @submit.prevent="submitOrder">
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="name" required />
      </div>
      <div>
        <label for="address">Address:</label>
        <input id="address" v-model="address" required />
      </div>
      <!-- Disable button if cart is empty -->
      <button type="submit">Place Order</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DeliveryForm',
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      address: '',
    };
  },
  methods: {
    submitOrder() {
      if (this.cart.length === 0) {
        alert('Your cart is empty. Please add items to the cart.');
        return;
      }
      this.$emit('place-order', { name: this.name, address: this.address });
      this.name = '';
      this.address = '';
    },
  },
};
</script>

<style scoped>
.delivery-form {
  margin-top: 20px;
}

form div {
  margin-bottom: 10px;
}

label {
  display: block;
}

input {
  width: 90%;
  padding: 5px;
}

button {
  margin-top: 10px;
}
</style>
