import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './modules/tasks'
import groups from './modules/groups'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tasks,
    groups
  }
})
