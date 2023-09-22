<template>
  <div class="container">
    <button @click="fetchColor">
      <img alt="Vue logo" class="logo" :class="{ 'rotated': isRotated }" src="@/assets/logo.png" width="50" height="50" />
    </button>
    <div class="result" v-if="color">
      <p>A cor é: </p>
      <div class="color" :style="{ backgroundColor: color.hex.value, width: '400px', height: '400px', }">{{
        color.name.value }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const color = ref(null);

const fetchColor = async () => {
  try {
    const response = await fetch('https://www.thecolorapi.com/random');
    if (response.ok) {
      const data = await response.json();
      color.value = data;
    } else {
      console.error('Erro ao buscar a cor da API');
    }
  } catch (error) {
    console.error('Erro ao buscar a cor da API:', error);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.result {
  margin-left: 10rem;
  text-align: center;
}

.color {
  margin-top: 1rem;
  border: 1rem solid;
  border-color: white;
  text-align: center;
  align-items: center;
  font-size: xx-large;
  font-weight: 700;
}

p {
  font-size: xx-large;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;


}

button {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 2rem;
}
</style>
