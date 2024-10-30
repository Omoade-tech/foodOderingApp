<template>
  <div class="dish-list">
    <div v-for="dish in dishes" :key="dish.id" class="dish-item">
      <img :src="dish.image" :alt="dish.name" />
      <h3>{{ dish.name }}</h3>
      <p>${{ dish.price.toFixed(2) }}</p>
      <button @click="$emit('add-to-cart', dish)" class="orderc">Add to Cart</button>
      <button @click="$emit('show-details', dish)" class="orderb">Show Details</button> <!-- Show Details button -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DishList',
  props: {
    dishes: Array,
  },
};
</script>

<style scoped>
.dish-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.dish-item {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  color: aliceblue;
}

.dish-item img {
  max-width: 100%;
  height: auto;
}

.orderc {
  margin-top: 10px;
  padding: 10px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
}
.orderc:active{
  background-color: #ddd;
  color:black;
}


</style>
