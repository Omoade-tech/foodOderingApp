<template>
    <div class="order-success-modal">
      <div class="modal-content">
        <h2>Order Successful!</h2>
        <p>Thank you for your order. Here are the details:</p>
        <ul>
          <li v-for="item in cart" 
          :key="item.id">
            {{ item.name }} - Quantity: {{ item.quantity }} = 
            ${{ (item.price * item.quantity).toFixed(2) }}
          </li>
        </ul>
        <p>Total Price: ${{ totalPrice.toFixed(2) }}</p>
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cart: Array,
      totalPrice: Number,
    },
  };
  </script>
  
  <style scoped>
  .order-success-modal {
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
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
    text-align: center;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    margin-top: 10px;
  }
  </style>
  