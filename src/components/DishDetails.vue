<template>
  <div class="dish-details-modal">
    <div class="modal-content">
      <h2>{{ dish.name }}</h2>
      <img :src="dish.image" :alt="dish.name" />
      <p>{{ dish.description }}</p>
      <p>Price: ${{ dish.price.toFixed(2) }}</p>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DishDetails',
  props: {
    dish: Object,
  },
};
</script>

<style scoped>
.dish-details-modal {
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

.modal-content img {
  max-width: 100%;
  height: 300px;
}
</style>
