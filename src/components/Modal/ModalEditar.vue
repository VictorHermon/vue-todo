<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5 mb-3">Editar</v-card-title>

        <v-text-field
          class="px-4"
          label="Informe a nova tarefa"
          outlined
          v-model="titulo"
        ></v-text-field>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn 
          color="blue darken-1" 
          text 
          @click="editaTarefa"
          >
            Editar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['tarefa'],
  data() {
    return {
      dialog: true,
      titulo: null,
    };
  },
  created() {
    this.titulo = this.tarefa.titulo
  },
  methods: {
    editaTarefa() {
      let novaTarefa = {
        titulo: this.titulo,
        id: this.tarefa.id
      }
      this.$store.dispatch('editaTarefa', novaTarefa)
      this.$emit('fechaModal')
    }
  }
};
</script>