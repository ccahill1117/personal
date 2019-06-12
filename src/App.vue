<template>
  <v-app dark>
    <v-toolbar app> 
      <router-link to="/">
        <v-btn flat>
          <v-toolbar-title>Christopher Thomas Cahill</v-toolbar-title>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid class="landingContainer">
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app class="pa-3">
      <router-link to="/contact">
        <v-btn flat>Contact</v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app> 

</template>

<script>
import HelloWorld from './components/HelloWorld'
import Landing from './components/Landing'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Sound from './components/Sound'
import Squash from './components/Squash'
import Wikiraces from './components/Wikiraces'
import Subnav from './components/Subnav'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Landing,
    Contact,
    Blog,
    Sound,
    Squash,
    Wikiraces,
    Subnav

  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

  a {
    text-decoration: none;
  }

  .landingContainer {
    padding-top: 3px;
  }


</style>



    <!-- <v-content>
      <HelloWorld/>
    </v-content> -->