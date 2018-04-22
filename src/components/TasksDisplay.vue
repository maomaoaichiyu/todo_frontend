<template>
  <div id="tasksDisplay">
    <div id="filter">
      <div>Filter by group: </div>
      <select id="groupselect" v-model="selectedGroup">
        <option value="none"></option>
        <option v-for="group in groups" :key="group._id" :value="group.name">{{group.name}}</option>
      </select>
    </div>
    <button id="delete" v-bind:disabled="selectedGroup === 'none'" v-on:click="deleteChosenGroup">Del.Group</button>
    <div v-for="task in tasks" :key="task._id" class="taskRow">
      <input type="checkbox" v-on:change="checkTheTask(task)" class="checkbox" :checked="task.checked"/>{{ task.text }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
  },
  methods: {
    ...mapActions([
      'getTasks',
      'getGroups',
      'deleteGroup',
      'checkTask'
    ]),
    deleteChosenGroup: function () {
      return this.deleteGroup(this.selectedGroup)
        .then(() => this.getGroups())
        .then(() => { this.selectedGroup = 'none' })
    },
    checkTheTask: function (task) {
      return this.checkTask({
        taskID: task._id,
        checked: !task.checked
      })
    }
  },
  watch: {
    'selectedGroup' (newValue, oldValue) {
      this.getTasks(newValue !== 'none' ? newValue : undefined)
    }
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
  margin-left: 10px;
  align-self: flex-start;
}
#delete {
  width: 80px;
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: 10px;
}
.checkbox {
  margin-right: 5px;
}
</style>
