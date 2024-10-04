import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'yeh', price: 49.99, qty: 13 },
    { id: 2, name: 'livro', price: 79.99, qty: 10 },
    { id: 3, name: 'bbb 25', price: 59.99, qty: 6 },
    { id: 4, name: 'cao', price: 9.99, qty: 1 },
    { id: 5, name: 'dado', price: 99.99, qty: 19 },
    { id: 6, name: 'novo home(eu)', price: 59.99, qty: 35 }
  ]);


  function getProductById(id) {
    return products.value.find(product => product.id == id) || null;
  }


  function deleteProductById(id) {
    const pos = products.value.findIndex((product) => product.id == id);
    if (pos !== -1) products.value.splice(pos, 1);
  }


  function addProduct(newProduct) {
    const newId = products.value.length ? products.value[products.value.length - 1].id + 1 : 1;
    products.value.push({ id: newId, ...newProduct });
  }

  return { products, getProductById, deleteProductById, addProduct };
});
