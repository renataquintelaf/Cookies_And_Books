<script>
import axios from "axios";
export default {
  data() {
    return {
      autores: [],
      novo_autor: "",
    };
  },
  async created() {
    const autores = await axios.get("http://localhost:4000/autores");
    this.autores = autores.data;
  },
  methods: {
    async salvar() {
      const autor = {
        nome: this.novo_autor,
      };
      const autor_criado = await axios.post(
        "http://localhost:4000/autores",
        autor
      );
      this.autores.push(autor_criado.data);
    },
    async excluir(autor) {
      await axios.delete(`http://localhost:4000/autores/${autor.id}`);
      const indice = this.autor.indexOf(autor);
      this.autor.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Autor</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="novo_autor"
        @keydown.enter="salvar"
        placeholder="Autor"
      />
      <button @click.enter="salvar">Salvar</button>
    </div>

    <div class="list-times">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{ autor.nome }}</td>
            <td>
              <button @click="excluir(livro)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
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
</style>
