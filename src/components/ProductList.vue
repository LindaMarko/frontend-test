<template>
  <div class="product-list">
    <main>
      <div class="album py-5 bg-light">
        <div class="container">
          <div
            class="products-container row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
          >
            <ProductItem
              v-for="product in products"
              :key="product.id"
              :id="product.id"
              :img="product.image_link"
              :name="product.name"
              :price="product.price"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>
