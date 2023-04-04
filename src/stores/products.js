import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product',{
  state: () => ({
    productList: [],
  }),
  getters:{
    getProducts(state){
      return state.productList
    }
  },
  actions: {
    async fetchProducts() {
      const response = await axios.get('https://fakestoreapi.com/products')
      this.productList = response.data
      // console.log(response.data)
    },
  },
})
