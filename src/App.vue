<template>
  <div class="container">
    <header>
      <div class="logo">
        <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="50" height="50" />
        <h1>RandKolor</h1>
      </div>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Sobre</RouterLink>
          <RouterLink to="/makeColor">Criar Cor</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.container {
  width: auto;
}

.logo {
  display: flex;
  vertical-align: middle;
  text-align: center;

}

h1 {
  font-size: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
}

header {
  margin-top: 1rem;
  width: 100vw;
  position: fixed;
  top: 0;
}

nav {
  margin-top: 1rem;
  border: 1px solid;
  border-color: rgb(53, 55, 58);
  border-radius: 5px;
  width: fit-content;
  
}

a {
  font-weight: 700;

  padding-inline: 1.6rem;
  padding-block: 0.2rem;
 
}

main {
  width: 90vw;
}
</style>
