import db from "@/services/localbase"

export default {
    adicionaTarefa({commit}, titulo) {
        db.collection('tarefas').add({
          id: new Date().getTime(),
          titulo, 
          concluido: false
        }).then(() => commit('buscaTarefa'))
      },
      editaTarefa({commit}, novaTarefa) {
        db.collection('tarefas').doc({id: novaTarefa.id}).update({
          titulo: novaTarefa.titulo
        }).then(() => {commit('buscaTarefa')})
      },
      concluiTarefa({commit}, tarefa) {
        db.collection('tarefas').doc({id: tarefa.id}).update({
          concluido: !tarefa.concluido
        }).then(() => {commit('buscaTarefa')})
      },
      removeTarefa({commit}, id) {
        db.collection('tarefas').doc({ id }).delete().then(() => {commit('buscaTarefa')})
      }
}