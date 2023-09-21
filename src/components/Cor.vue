<template>
  <div>
    <button @click="rotateImage">
      <img alt="Vue logo" class="logo" :class="{ 'rotated': isRotated }" src="@/assets/logo.png" width="40" height="40" />
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isRotated = ref(false);

const rotateImage = () => {
  isRotated.value = !isRotated.value;
};
</script>

<style scoped>
button {
  margin-left: 1rem;
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Adicione uma classe para a animação de rotação */
.rotated {
  transform-origin: center;
  transition: transform 0.5s ease;
  /* Adicione uma transição suave */
}

/* Defina a rotação */
.rotated img {
  transform: rotate(180deg);
}
</style>
