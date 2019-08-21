<template>
  <v-app dark>
    <v-toolbar app>      
      <router-link to="/">
        <v-toolbar-title>
          <span class="yourName">Christopher Thomas Cahill</span>
        </v-toolbar-title>
      </router-link>

      <!-- <v-toolbar-items>
      <v-menu :nudge-width="100">
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" dark>arrow_drop_down</v-icon>
        </template>
        <v-list>
          <v-list-tile>
            <v-btn light href="/#/about">About</v-btn> 
          </v-list-tile>
          <v-list-tile>
            <v-btn href="/#/blog">Blog</v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn light href="/#/work">Work</v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn href="/#/squash">Squash</v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn light href="/#/sound">Sound</v-btn>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>       -->
    
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
      items: [
        'Work', 'Blog', 'Sound', 'Squash'
      ]

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

  .yourName {
    color: white;
  }


</style>



    <!-- <v-content>
      <HelloWorld/>
    </v-content> -->