import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'yeh', price: 59.99, qty: 1 },
    { id: 2, name: 'livro', price: 59.99, qty: 1 },
    { id: 3, name: 'bbb 25', price: 59.99, qty: 1 },
    { id: 4, name: 'cao', price: 59.99, qty: 1 },
    { id: 5, name: 'dado', price: 59.99, qty: 1 },
    { id: 6, name: 'novo home(eu)', price: 59.99, qty: 1 }
  ])
  return { products }
})
