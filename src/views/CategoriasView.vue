<script>
import axios from "axios";
export default {
  data() {
    return {
      categorias: [],
      novo_categoria: "",
    };
  },
  async created() {
    const categorias = await axios.get("http://localhost:4000/categorias");
    this.categorias = categorias.data;
  },
  methods: {
    async salvar() {
      const categoria = {
        nome: this.novo_categoria,
      };
      const categoria_criado = await axios.post(
        "http://localhost:4000/categorias",
        categoria
      );
      this.categorias.push(categoria_criado.data);
    },
    async excluir(categoria) {
      await axios.delete(`http://localhost:4000/categorias/${categoria.id}`);
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Categorias</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        v-model="novo_categoria"
        @keydown.enter="salvar"
        placeholder="Categoria"
      />
      <button @click.enter="salvar">Salvar</button>
    </div>
    <div class="tabel">
      <table>
        <thead>
          <tr>
            <th>Categorias</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categorias.nome }}</td>
            <td>
              <button @click="excluir(categoria)">Excluir</button>
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
}

.tabel {
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
