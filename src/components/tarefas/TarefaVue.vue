<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': tarefa.concluido }"
      @click="markConcluido(tarefa)"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefa.concluido }"
            >{{ tarefa.titulo }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action>
          <TarefaMenu :tarefa="tarefa"/>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import TarefaMenu from "./TarefaMenu.vue";

export default {
  components: { TarefaMenu },
  props: ["tarefa"],
  data() {
    return { tarefaLocal: this.tarefa };
  },
  methods: {
    markConcluido(tarefa) {
      this.$store.dispatch('concluiTarefa', tarefa);
    },
    removeTarefa(id) {
      this.$store.commit("removeTarefa", id);
    },
  },
};
</script>