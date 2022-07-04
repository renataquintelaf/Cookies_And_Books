<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          livro: "Uma Farsa De Amor Na Espanha",
          idioma: "Português",
          id: "e9be6069-5a80-44f8-b2f4-8276a4162316",
          quantidade: "5",
        },
      ],
      novo_livro: "",
      novo_idioma: "",
      novo_quantidade: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro !== "") {
        const novo_id = uuidv4();
        this.livros.push({
          id: novo_id,
          livro: this.novo_livro,
          idioma: this.novo_idioma,
          quantidade: this.novo_quantidade,
        });
        this.novo_livro = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="left-side">
      <div class="title">
        <h2>Livros</h2>
      </div>
      <div class="form-input">
        <div class="input-dois">
          <input type="text" v-model="novo_livro" placeholder="Livro" />
        </div>
        <div class="input-tres">
          <input type="text" v-model="novo_idioma" placeholder="Idioma" />
        </div>
        <div class="input-quatro">
          <input
            type="number"
            v-model="novo_quantidade"
            placeholder="Quantidade"
          />
        </div>
        <button @click.enter="salvar">Salvar</button>
      </div>
    </div>
    <div class="right-side">
      <div class="list-times">
        <table>
          <thead>
            <tr>
              <th>Livro</th>
              <th>Idioma</th>
              <th>Código</th>
              <th>Quantidade</th>
              <th>Opções</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="livro in livros" :key="livro.autor">
              <td>{{ livro.livro }}</td>
              <td>{{ livro.idioma }}</td>
              <td>{{ livro.id }}</td>
              <td>{{ livro.quantidade }}</td>
              <td>
                <button @click="excluir(livro)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style>
.title {
  text-align: center;
  margin: 2rem 0;
  font-size: 150%;
}

.form-input {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  border-radius: 30px;
  padding: 2rem;
}
.form-input input {
  padding: 0.5rem;
  border-radius: 10px;
  border: transparent;
}

.form-input button {
  border-radius: 20%;
}
input,
button {
  padding: 0.6rem;
  border: transparent;
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  border-collapse: collapse;
  margin: 0 auto;
  border: transparent;
  font-size: 1rem;
  text-align: center;
}

table thead {
  color: black;
}
::placeholder {
  color: black;
  opacity: 0.5;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
