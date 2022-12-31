import db from "@/services/localbase"

export default {
    buscaTarefa(state) {
        db.collection('tarefas').get().then(tarefasDB => {
          state.tarefas = tarefasDB
        })
      }
}