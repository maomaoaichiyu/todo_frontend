<template>
  <div id="addtask">
    <div id="task">
      <div id="tasktitle">Task:</div>
      <input type="text" id="taskcontent" placeholder="task content..." v-model="taskContent"/>
    </div>
    <div id="group">
      <div id="grouptitle">Group(optional):</div>
      <select id="groupselect" v-model="selectedGroup">
        <option value="none"></option>
        <option v-for="group in groups" :key="group._id" :value="group.name">{{group.name}}</option>
      </select>
    </div>
    <button id="addtaskbutton" v-on:click="addTaskWithContent" v-bind:disabled="taskContent === ''">Add</button>
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
        .then(() => {
          this.taskContent = ''
          this.selectedGroup = 'none'
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addtask  {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  background-color: #A1BBE0;
}
#task, #group {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
#task *, #group * {
  margin: 5px;
}
#addtaskbutton {
  width: 55px;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
#groupselect {
  width: 40%;
}
#taskcontent {
  width: 60%;
}
</style>
