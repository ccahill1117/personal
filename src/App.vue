<template>
  <v-app dark>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app> 

</template>

<script>
import HelloWorld from './components/HelloWorld'
import Landing from './components/Landing'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Landing

  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>



</style>



    <!-- <v-content>
      <HelloWorld/>
    </v-content> -->