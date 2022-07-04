<script>
export default {
  data() {
    return {
      livros: [
        {
          autor: "Coollen Hoover",
        },
      ],
      novo_autor: "",
    };
  },
  methods: {
    salvar() {
      this.livros.push({
        autor: this.novo_autor,
      });
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
            <th>Autor</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="livro in livros" :key="livro.autor">
            <td>{{ livro.autor }}</td>
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
