import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/assets/data/products.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [...products],
    cart: {
      items: [],
      total: 0,
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === productData.id
      );

      if (productInCartIndex < 0) {
        const newItem = {
          productId: productData.id,
          img: productData.image_link,
          name: productData.name,
          price: Number(productData.price),
          qty: 1,
        };
        state.cart.items.push(newItem);
      } else {
        state.cart.items[productInCartIndex].qty++;
      }
      state.cart.total += Number(productData.price);
    },
    increaseItemQty(state, payload) {
      const cartItem = payload;
      cartItem.qty++;
      state.cart.total += cartItem.price;
    },
    decreaseItemQty(state, payload) {
      const cartItem = payload;
      cartItem.qty--;
      state.cart.total -= cartItem.price;
      if (cartItem.qty === 0) {
        const index = state.cart.items.indexOf(cartItem);
        state.cart.items.splice(index, 1);
      }
    },
  },
  actions: {
    addToCart(context, payload) {
      const prodId = payload;
      const products = context.getters['products'];
      const product = products.find((prod) => prod.id === prodId);
      context.commit('addProductToCart', product);
    },
    increaseQty(context, payload) {
      const prodId = payload;
      const cartItems = context.getters['cartItems'];
      const item = cartItems.find((item) => item.productId === prodId);
      context.commit('increaseItemQty', item);
    },
    decreaseQty(context, payload) {
      const prodId = payload;
      const cartItems = context.getters['cartItems'];
      const item = cartItems.find((item) => item.productId === prodId);
      context.commit('decreaseItemQty', item);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    cartItems(state) {
      return state.cart.items;
    },
    cartTotal(state) {
      return state.cart.total;
    },
  },
});
