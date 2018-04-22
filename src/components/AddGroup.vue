<template>
  <div id="addgroup">
    <div id="grouptitle">Group:</div>
    <input type="text" id="groupname" placeholder="group name..." v-model="groupName"/>
    <button id="addgroupbutton" v-on:click="addGroup">Add</button>
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
        .then(() => this.getGroups())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addgroup  {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
}
#addgroup * {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
