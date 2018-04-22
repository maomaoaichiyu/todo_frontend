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
      <span><input type="checkbox" v-on:change="checkTheTask(task)" class="checkbox" :checked="task.checked"/>{{ task.text }}</span>
      <img v-on:click="deleteChosenTask(task._id)" src="@/assets/delete.png" class="deleteTaskIcon"/>
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
      'checkTask',
      'deleteTask'
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
    },
    deleteChosenTask: function (taskID) {
      return this.deleteTask(taskID)
        .then(() => this.getTasks(this.getGroupNameForRequest(this.selectedGroup)))
    },
    getGroupNameForRequest (group) {
      return group !== 'none' ? group : undefined
    }
  },
  watch: {
    'selectedGroup' (newValue, oldValue) {
      this.getTasks(this.getGroupNameForRequest(newValue))
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
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
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
.deleteTaskIcon {
  width: 20px;
  height: 20px;
  align-self: flex-end;
}
</style>
