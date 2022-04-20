<template>
  <div class="cart-item">
    <div class="upper-part">
      <img :src="`${img}`" width="80" />
      <h3 class="title">{{ name }}</h3>
    </div>
    <div class="lower-part">
      <div class="quantity">
        <p @click="decreaseQty"><strong>-</strong></p>
        <p>{{ quantity }}</p>
        <p @click="increaseQty"><strong>+</strong></p>
      </div>
      <p>${{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'img', 'name', 'price', 'quantity'],
  methods: {
    increaseQty() {
      this.$store.dispatch('increaseQty', this.id);
    },
    decreaseQty() {
      this.$store.dispatch('decreaseQty', this.id);
    },
  },
};
</script>

<style scoped lang="scss">
.cart-item {
  margin-bottom: 3rem;
}
.upper-part {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
img {
  margin-right: 1rem;
}
.title {
  font-size: 0.9rem;
}
.lower-part {
  margin-left: 30%;
  display: flex;
  justify-content: space-between;
}
.quantity {
  display: flex;

  p {
    margin-right: 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
}
p {
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
