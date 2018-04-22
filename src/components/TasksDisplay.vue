<template>
  <div id="tasksDisplay">
    <div id="filter">
      <div>Filter by group: </div>
      <select id="groupselect" v-model="selectedGroup">
        <option value="none"></option>
        <option v-for="group in groups" :key="group._id" :value="group.name">{{group.name}}</option>
      </select>
    </div>
    <div v-for="task in tasks" class="taskRow" :key="task._id">{{ task.text }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TasksDisplay',
  data () {
    return {
      selectedGroup: 'none'
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.tasks,
      groups: state => state.groups.groups
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tasksDisplay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F2D3F3;
  margin: 10px;
}
#filter {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#filter * {
  margin: 10px;
}
#groupselect {
  width: 40%;
}
.taskRow {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
