import http from '@/utils/http'

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:8081'

export default {
  state: {
    tasks: []
  },
  mutations: {
    setTasks (state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    getTasks ({ commit }) {
      http.get(`${BACKEND_URL}/tasks`)
        .then(response => JSON.parse(response))
        .then(tasks => commit('setTasks', tasks))
    }
  }
}
