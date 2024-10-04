<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/products';

const productStore = useProductStore();
const router = useRouter();


const novoProdutoName = ref('');
const novoProdutoPrice = ref(0);
const novoProdutoQty = ref(1);


function addNewProduct() {
  if (novoProdutoName.value && novoProdutoPrice.value > 0 && novoProdutoQty.value > 0) {
    productStore.addProduct({
      name: novoProdutoName.value,
      price: parseFloat(novoProdutoPrice.value),
      qty: parseInt(novoProdutoQty.value)
    });

    novoProdutoName.value = '';
    novoProdutoPrice.value = 0;
    novoProdutoQty.value = 1;
  }
}

function visualizar(id) {
  router.push(`/produto/${id}`);
}
</script>

<template>
  <h1>Listagem de Produtos</h1>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nome</th>
        <th>Preço</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productStore.products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>
          <button @click="visualizar(product.id)">Ver</button>
          <button @click="productStore.deleteProductById(product.id)">Excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
  <h2>Adicionar Novo Produto</h2>
  <form @submit.prevent="addNewProduct">
    <div>
      <label for="name">Nome:</label>
      <input id="name" v-model="novoProdutoName" required />
    </div>
    <div>
      <label for="price">Preço:</label>
      <input id="price" type="number" v-model="novoProdutoPrice" min="0" step="0.01" required />
    </div>
    <div>
      <label for="qty">Quantidade:</label>
      <input id="qty" type="number" v-model="novoProdutoQty" min="1" required />
    </div>
    <button type="submit">Adicionar Produto</button>
  </form>
</template>
