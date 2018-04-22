<template>
  <div id="main">
    <div id="adds">
    </div>
    <TasksDisplay id="taskDisplay"></TasksDisplay>
  </div>
</template>

<script>
import TasksDisplay from '@/components/TasksDisplay'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'mainpage',
  components: {
    'TasksDisplay': TasksDisplay
  },
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
  #main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  #taskDisplay {
    height: 80vh;
    width: 40vh;
  }
</style>
