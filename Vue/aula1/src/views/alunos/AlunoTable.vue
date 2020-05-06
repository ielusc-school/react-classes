<template>
  <div>
    <table>
      <tr>
        <td>Nome</td>
        <td>E-mail</td>
        <td>Cidade</td>
        <td>Ações</td>
      </tr>
      <tr v-for="person in persons" :key="person.id">
        <td>{{ person.name }}</td>
        <td>{{ person.email }}</td>
        <td>{{ person.city }}</td>

        <td>
          <button class="btn btn-primary">{{ btnAdd }}</button>
          <button class="btn btn-danger">{{ btnRemove }}</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AlunoTable',
  data() {
    return {
      btnAdd: 'Adicionar',
      btnRemove: 'Remover',
      persons: [
        {
          id: 1,
          name: 'Matheus',
          city: 'SP',
          email: 'xpto@terra.com.br',
        },
        {
          id: 2,
          name: 'Alexandre',
          city: 'SP',
          email: 'xpto@terra.com.br',
        },
        {
          id: 3,
          name: 'William',
          city: 'SC',
          email: 'xpto@terra.com.br',
        },
        {
          id: 4,
          name: 'Jordan',
          city: 'SC',
          email: 'xpto@terra.com.br',
        },
        {
          id: 5,
          name: 'Stephanie',
          city: 'SC',
          email: 'xpto@terra.com.br',
        },
      ],
    };
  },
};
</script>

<style scoped>
table {
  background: #ddd;
  border: #222;
}

.btn {
  width: 120px;
  height: 40px;
  border-radius: 10px;
  font-size: 18px;
  letter-spacing: 1px;
  margin-left: 10px;
}

.btn-primary {
  background-color: blue;
  color: #fff;
}

.btn-danger {
  background-color: red;
  color: #fff;
}
</style>
