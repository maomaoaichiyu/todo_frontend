<template>
  <div id="addtask">
    <div id="tasktitle">Task:</div><input type="text" id="taskcontent" placeholder="task content..." v-model="taskContent"/>
    <div id="group">Group(optional):</div>
    <select id="groupselect" v-model="selectedGroup">
      <option value="none"></option>
      <option v-for="group in groups" :key="group._id" value="group.name">{{group}}</option>
    </select>
    <button id="addtaskbutton" v-on:click="addTaskWithContent">Add</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AddTask',
  data () {
    return {
      taskContent: '',
      selectedGroup: 'none'
    }
  },
  computed: {
    ...mapState({
      groups: state => state.groups.groups
    })
  },
  methods: {
    ...mapActions([
      'getTasks',
      'addNewTask',
      'attachTaskToGroup'
    ]),
    addTaskWithContent: function () {
      let promise = this.addNewTask({text: this.taskContent})
      if (this.selectedGroup !== 'none') {
        promise = promise.then((taskId) => this.attachTaskToGroup({taskId: taskId, group: this.selectedGroup}))
      }
      return promise.then(() => this.getTasks())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addtask  {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
}
#addtask * {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
