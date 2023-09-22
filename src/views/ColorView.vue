<script setup>
import Cor from '../components/Cor.vue'
</script>

<template>
  <main>
    <div class="pageTitle">
      <h1>Traga sua cor:</h1>
    </div>
    <Cor />
  </main>
</template>

<style scoped>
.pageTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Usar altura de 100% da viewport para centralizar verticalmente */
}

h1 {
  font-weight: 500;
  font-size: 2.8rem;
  /* Outros estilos do título, se necessário */
}
</style>
