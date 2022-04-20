<template>
  <header>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <strong>My webshop.com</strong>
        </a>
        <TheCart />
      </div>
    </div>
  </header>
</template>

<script>
import TheCart from './TheCart.vue';

export default {
  components: {
    TheCart,
  },
};
</script>
