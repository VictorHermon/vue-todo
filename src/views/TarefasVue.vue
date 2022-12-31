<template>
  <div>
    <v-list flat subheader>
      <ListadeTarefas />
      
      <div 
      v-if="!$store.state.tarefas.length"
      class="mt-16 animate__animated animate__bounceInUp">
        <center>
          <v-icon size="100" color="primary">mdi-check</v-icon>
          <div class="text-h5 primary--text">Nenhuma Tarefa</div>
        </center>
      </div>
    </v-list>
  </div>
</template>

<script>
import ListadeTarefas from "@/components/tarefas/ListadeTarefas.vue";

export default {
  components: {
    ListadeTarefas,
  },
  data() {
    return {
      campoInput: null,
    };
  },
  created() {
    this.$store.commit("buscaTarefa");
  },
  methods: {
    addTarefa() {
      this.$store.dispatch("adicionaTarefa", this.campoInput);
      this.campoInput = null;
    },
  },
};
</script>
