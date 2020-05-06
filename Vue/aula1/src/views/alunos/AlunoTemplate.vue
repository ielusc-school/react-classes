<template>
  <div>
    <h1>{{ hello }}</h1>
    <label for=""> {{name}} </label> <br>
    <input type="text" v-model="name">

    <section v-if="!isTrue">
      <AlunoTable />
    </section>
    <section v-if="isTrue">
      <hr>
      <p>Não tem dados</p>
    </section>
  </div>
</template>

<script>
import AlunoTable from './AlunoTable.vue';

export default {
  name: 'AlunoTemplate',
  components: {
    AlunoTable,
  },
  data() {
    return {
      name: '',
      hello: 'Alexandre',
      isTrue: true,
    };
  },
};
</script>

<style>
</style>
