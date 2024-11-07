<template>
    <h1>Counter App</h1>
    <p id="counter-info">Count: {{ count }}</p>
    <button @click="increment">Increment</button>
</template>
  
<script lang="ts" setup>
    import { ref } from 'vue';
    const count = ref(0);
    const increment = () => count.value++;
</script>
  
<style scoped>
</style>
  