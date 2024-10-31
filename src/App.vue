<template>
  <div id="app">
    <h1> FOOD ORDERING APP</h1>
    <DishList :dishes="dishes" @add-to-cart="addToCart" @show-details="showDishDetails" />
    <CartSummary :cart="cart" :total-price="totalPrice" @remove-from-cart="removeFromCart" /> <!-- Add remove event -->
    <DeliveryForm @place-order="placeOrder" :cart="cart" />
    <Teleport to="body">
      <DishDetails v-if="selectedDish" :dish="selectedDish" @close="closeDishDetails" />
    </Teleport>
    <div v-if="orderPlaced" class="order-success">Order Successful!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dishes: [
        { id: 1, name: 'Pizza', price: 100.412, description: 'Delicious pizza with various toppings', image:'./public/image/pizza.jpg' },
        { id: 2, name: 'Indomie', price: 150.123, description: 'Indomie is very sweet well well', image: './public/image/indomie.jpg' },
        { id: 3, name: 'Salad', price: 200.2, description: 'Fresh and healthy salad', image: './public/image/salad.jpg' },
        { id: 4, name: 'Jollof Rice', price: 400.50, description: 'Nigeria jollof is the best', image: './public/image/jollofrice.jpg' },
        { id: 5, name: 'Fried Rice', price: 200.890, description: 'Very delicious and spicy', image: './public/image/friedrice.jpg' },
        { id: 6, name: 'Spaghetti', price: 50.500, description: 'Pasta spaghetti with meatball', image: './public/image/spaghetti.jpg' },
      ],
      cart: [],
      selectedDish: null,
      orderPlaced: false,
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    addToCart(dish) {
      const existingItem = this.cart.find(item => item.id === dish.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...dish, quantity: 1 });
      }
            // Check if the cart has more than 5 items
            const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
      if (totalItems > 5) {
        alert('You have more than 5 item in your cart!');
      }

    },
    removeFromCart(itemId) {
      this.cart = this.cart.filter(item => item.id !== itemId); // Filter out the item by id
    },
    showDishDetails(dish) {
      this.selectedDish = dish;
    },
    closeDishDetails() {
      this.selectedDish = null;
    },
    placeOrder() {
      this.orderPlaced = true;
      this.cart = [];
      setTimeout(() => {
        this.orderPlaced = false;
      }, 3000);
    },
  },
};
</script>



<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 1200px; 
  margin: 0 auto;
  padding: 20px;
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.5);
}

h1 {
  color: crimson;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  justify-content: space-around;
}
.main-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.left-section {
  flex: 2;
}
.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order-success {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}

button {
  background-color: red;
  color: aliceblue;
  padding: 10px;
  cursor: pointer;
}
@media screen and (min-width: 320px) and (max-width: 425px) {
  .main-content {
    display: flex;
  flex-direction: column;
}

}
</style>
