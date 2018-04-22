<template>
  <div id="main">
    <div id="adds">
      <AddTask id="addtask"></AddTask>
      <AddGroup id="addgroup"></AddGroup>
    </div>
    <TasksDisplay id="taskDisplay"></TasksDisplay>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask'
import AddGroup from '@/components/AddGroup'
import TasksDisplay from '@/components/TasksDisplay'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'mainpage',
  components: {
    'AddTask': AddTask,
    'AddGroup': AddGroup,
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
  #adds {
    width: 40vw;
  }
  #taskDisplay {
    width: 40vh;
  }
</style>
