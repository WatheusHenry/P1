# randkolor

Esse projeto é criado para um trabalho de faculdade

## Utilizada a API thecolorapi

[https://www.thecolorapi.com/docs](https://www.thecolorapi.com/docs).

## Funcionamento:

É feita uma requisição para a api atravez da rota `https://www.thecolorapi.com/random` 
onde o resultado dela é uma geração de cor aleatoria fazendo a composição da cor e o nome da mesma

```sh
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
```

Logo é rendenizado ao clickar em um botão, uma div onde será mostrada a cor solida 
e o nome dela 

```sh
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
```
## Project Setup

### Ao clonar o projeto:

```sh
npm install
```

### Para rodar a aplicação

```sh
npm run dev
```

