<template>
    <div>
      <h1>Liste des produits</h1>
      <div class="product-list">
        <div v-for="product in productList" :key="product.id" class="product">
          <img :src="product.image" alt="Product Image" class="product-image">
          <div class="product-details">
            <h2 class="product-title">{{ product.title }}</h2>
            <p class="product-description">{{ product.description }}</p>
            <p class="product-price">Prix : {{ product.price }} €</p>
          </div>
        </div>
      </div>
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
  