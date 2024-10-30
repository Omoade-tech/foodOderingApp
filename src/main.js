// import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

// Importing components
import DishList from './components/DishList.vue';
import DishDetails from './components/DishDetails.vue';
import DeliveryForm from './components/DeliveryForm.vue';
import CartSummary from './components/CartSummary.vue';
import OrderSuccessModal from './components/OrderSuccessModal.vue';

// Create the app instance
const app = createApp(App);

// Globally registering components
app.component('DishList', DishList);
app.component('DishDetails', DishDetails);
app.component('DeliveryForm', DeliveryForm);
app.component('CartSummary', CartSummary);
app.component('OrderSuccessModal',OrderSuccessModal)

// Using Pinia for state management
app.use(createPinia());

// Mount the app to the DOM
app.mount('#app');
