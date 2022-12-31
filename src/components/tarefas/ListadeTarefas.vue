<template>
  <div>
    <drop-list
      :items="tarefasComputadas"
      @reorder="$event.apply(tarefasComputadas)"
    >
      <template v-slot:item="{ item, reorder }">
        <drag :key="item.id" :data="item">

          <TarefaVue
          :tarefa="item" 
          style="background-color: white"
            :style="
              reorder
                ? { borderLeft: '2px solid #1976D2', marginLeft: '-2px' }
                : {}
            "/>
            
          <v-divider />
        </drag>
      </template>
    </drop-list>
  </div>
</template>

<script>
import { Drag, DropList } from "vue-easy-dnd";
import TarefaVue from "./TarefaVue.vue";

export default {
  name: "App",
  components: {
    Drag,
    DropList,
    TarefaVue,
  },
  computed: {
    tarefasComputadas() {
      return this.$store.state.tarefas;
    },
  },
};
</script>
