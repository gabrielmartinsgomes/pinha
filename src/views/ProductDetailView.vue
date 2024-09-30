<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/products';
const productsStore = useProductStore();
const props = defineProps(['id']);
const product = ref({});


onMounted(() => {
    product.value = productsStore.getProductById(props.id)
})

</script>

<template>
    <h1>Detalhes do Produto - {{ id }}</h1>
    <h2>Nome: {{ product.name }}</h2>
    <h2>Preço: {{ product.price}}</h2>
    <h2>Estoque: {{ product.qty }}</h2>
</template>