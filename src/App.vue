<template>
  <v-app dark>
    <!-- <v-navigation-drawer app>
      <h2>nav drawer</h2>
    </v-navigation-drawer> -->
    <v-toolbar app> 
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <router-link to="/">
        <v-btn flat>
          <v-toolbar-title>Christopher Thomas Cahill</v-toolbar-title>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>About</v-btn>
        <v-btn flat>Blog</v-btn>
        <v-btn flat>Work So Far</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
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

export default {
  name: 'App',
  components: {
    HelloWorld,
    Landing,
    Contact,
    Blog

  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

  a{
    text-decoration: none;
  }


</style>



    <!-- <v-content>
      <HelloWorld/>
    </v-content> -->