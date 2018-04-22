import request from 'request-promise-native'

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
    getTasks ({ commit }, group) {
      let filter = group ? `?group=${group}` : ''
      return request.get({url: `${BACKEND_URL}/tasks${filter}`, json: true})
        .then(tasks => commit('setTasks', tasks))
    },
    addNewTask ({ commit }, task) {
      return request.post(`${BACKEND_URL}/tasks`).json(task)
    },
    checkTask ({ commit }, {taskID, checked}) {
      return request.patch(`${BACKEND_URL}/tasks/${taskID}`).json({checked: checked})
    },
    deleteTask ({ commit }, taskID) {
      return request.delete(`${BACKEND_URL}/tasks/${taskID}`)
    }
  }
}
