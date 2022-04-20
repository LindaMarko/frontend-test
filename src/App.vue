<template>
  <div id="app">
    <TheHeader />
    <ProductList />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    ProductList,
  },
};
</script>
