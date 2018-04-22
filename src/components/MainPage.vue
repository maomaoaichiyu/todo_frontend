<template>
  <div id="main">
    <div id="adds">
      <AddTask></AddTask>
      <br/>
      <AddGroup></AddGroup>
    </div>
    <div id="taskdisplay">
      <TasksDisplay></TasksDisplay>
    </div>
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
    this.getGroups()
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.tasks
    })
  },
  methods: {
    ...mapActions([
      'getTasks',
      'getGroups'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#adds {
  width: 40vw;
  height: 100vh;
}
#taskdisplay {
  width: 40vw;
  height: 100vh;
}
</style>
