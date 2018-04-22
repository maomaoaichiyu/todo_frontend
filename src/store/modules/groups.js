import request from 'request-promise-native'

const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:8081'

export default {
  state: {
    groups: []
  },
  mutations: {
    setGroups (state, groups) {
      state.groups = groups
    }
  },
  actions: {
    getGroups ({ commit }) {
      request.get({url: `${BACKEND_URL}/groups`, json: true})
        .then(groups => commit('setGroups', groups))
    },
    attachTaskToGroup ({ commit }, data) {
      let taskId = data.taskId
      let group = data.group
      request.patch({url: `${BACKEND_URL}/groups/${group}/${taskId}`, json: true})
    }
  }
}
