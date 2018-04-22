<template>
  <div id="addgroup">
    <div id="groupline">
      <div id="grouptitle">Group:</div>
      <input type="text" id="groupname" placeholder="group name..." v-model="groupName"/>
    </div>
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
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  background-color: #9CC6A2;
}
#addgroup * {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
}
#addgroupbutton {
  width: 55px;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
#groupline {
  display: flex;
  flex-direction: row;
}
#groupname {
  width: 55%;
}
</style>
