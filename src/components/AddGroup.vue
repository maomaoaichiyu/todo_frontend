<template>
  <div>
    <div id="grouptitle">Group:</div>
    <input type="text" id="groupname" placeholder="group name..." v-model="groupName"/>
    <button id="addtask" v-on:click="addGroup">Add</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AddGroup',
  data () {
    return {
      groupName: ''
    }
  },
  computed: {
    ...mapState({
    })
  },
  methods: {
    ...mapActions([
      'getGroups',
      'addNewGroup'
    ]),
    addGroup: function () {
      return this.addNewGroup({name: this.groupName})
        .then(() => this.getGroups)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addtask {
  width: 15px;
}
</style>
