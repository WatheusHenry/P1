<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sobre from './components/Sobre.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="250" height="250" />

    <div class="wrapper">
      <h1>RandKolor</h1>
      <nav>
        <RouterLink to="/">Sobre</RouterLink>
        <RouterLink to="/about">Criar Cor</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
h1 {
  font-size: 4rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
  background: #1176cf;
  background: linear-gradient(to right, #1176cf 15%, #ff5454 68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  justify-content: center;
  display: inline-block;
  padding: 0 2rem;
  border: 2px solid var(--color-border);
  border-radius: 2rem;
}

nav a:first-of-type {
  margin-inline: 1.3rem;
  display: inline-block;
  padding: 0 2rem;
  border: 2px solid var(--color-border);
  border-radius: 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
