<template>
  <div id="tasksDisplay">
    <div v-for="task in tasks" :key="task._id">{{ task.text }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TasksDisplay',
  computed: {
    ...mapState({
      tasks: state => state.tasks.tasks
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tasksDisplay {
  background-color: #C4DBF9;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#taskdisplay div {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
