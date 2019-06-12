<template>
  <div>
    <div>
      <Subnav></Subnav>
    </div>
  <div>
  <v-container grid-list-md text-xs-center class="landingContainer">
    <v-layout align-center justify-center row fill-height=true>
      <v-flex xs3>      
        <v-card dark color="secondary" elevation=0>
          <v-card-text class="px-0">Contact</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3>      
        <v-card dark color="secondary" elevation=0>
          <v-card-text class="px-0">Resume</v-card-text>
        </v-card>
      </v-flex> 
    </v-layout>
  </v-container>
  </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }

import Subnav from './components/Subnav'

</script>



<style>

.boxThing {
  border-style: solid;
  display: flex;
}

.landingContainer {
  height: 30rem;
}

</style>
