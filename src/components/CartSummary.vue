<template>
  <div class="cart-summary">
    <h2>Cart Summary</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - Quantity: {{ item.quantity }} = ${{ (item.price * item.quantity).toFixed(2) }}
        <button @click="$emit('remove-from-cart', item.id)">Remove</button> <!-- Remove Button -->
      </li>
    </ul>
    <p>Total Distinct Items: {{ totalDistinctItems }}</p>
    <p>Total Price: ${{ totalPrice.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  name: 'CartSummary',
  props: {
    cart: Array,
    totalPrice: Number,
  },
  computed: {
    totalDistinctItems() {
      return this.cart.length;
    },
  },
};
</script>

<style scoped>
.cart-summary {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  margin-right: 20px;
}
button {
  background-color: black;
  color: white;
  padding: 5px 10px;
  margin-left: 10px;
}
</style>
