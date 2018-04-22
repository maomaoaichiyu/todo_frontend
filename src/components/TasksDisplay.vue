<template>
  <div id="tasksDisplay">
    <ul>
      <div v-for="task in tasks" :key="task._id">{{ task.text }}</div>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TasksDisplay',
  mounted () {
    this.getTasks()
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.tasks
    })
  },
  methods: {
    ...mapActions([
      'getTasks'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #tasksDisplay {
    height: 80vh;
    width: 40vw;
    background-color: #C4DBF9;
  }
</style>
