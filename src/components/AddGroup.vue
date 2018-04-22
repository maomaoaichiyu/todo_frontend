<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task._id">{{ task.text }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TaskList',
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
</style>
