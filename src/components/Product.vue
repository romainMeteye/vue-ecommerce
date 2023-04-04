<template>
    <div>
      <h1>Liste des produits</h1>
      <ul>
        <li v-for="product in productList" :key="product.id">
          <img :src="product.image" alt="Product Image">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <p>Prix : {{ product.price }} €</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '@/stores/products'
  
  export default {
    name: 'ProductList',
    setup() {
      const productStore = useProductStore()
      console.log(productStore)
      return {
        productStore,
      }
    },
    data(){
        return {productList:[]}
    },
    async mounted(){
        await this.productStore.fetchProducts()
        this.productList = this.productStore.getProducts
    }
  }
  </script>
  