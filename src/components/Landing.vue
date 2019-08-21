<template>
  <v-container>
    <v-layout row wrap/>      
        <v-flex md12 d-flex>
          <v-btn href="/#/contact">Contact</v-btn>
        </v-flex>
        <v-flex md12 d-flex>
          <v-btn href="https://hereyougofriend.s3-us-west-2.amazonaws.com/Resume_CCahill.pdf" elevation=24>
            Resume
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6 d-flex>
          <v-btn href="https://www.cypress.christophercahill.co" elevation=24>
            Cypress.io CI/CD Project
          </v-btn>
        </v-flex>  
        <v-flex xs12 md6 d-flex>
          <v-btn href="/#/blog" elevation=24>
            Blog (under construction)
          </v-btn>
        </v-flex> 
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6 d-flex>
          <v-btn href="https://hereyougofriend.s3-us-west-2.amazonaws.com/Undergrad_thesis.pdf" elevation=24>
            Undergraduate Thesis 
          </v-btn>
        </v-flex>  
        <v-flex xs12 md6 d-flex>
          <v-btn href="https://s1portland.com/" elevation=24>
            S1 - Staff
          </v-btn>
        </v-flex> 
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6 d-flex>
          <v-btn href="http://www.webmaps.christophercahill.co" elevation=24>
            Python webscraper 
          </v-btn>
        </v-flex>  
        <v-flex xs12 md6 d-flex>
          <v-btn href="example.com" elevation=24>
            --
          </v-btn>
        </v-flex> 
      </v-layout>

      <!-- <v-flex d-flex xs12 sm6 md3>
        <v-card color="secondary" dark elevation=24>
          <v-card-text>yo</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="secondary" dark elevation=24>
          <v-card-text>yo</v-card-text>
        </v-card>
      </v-flex> -->

  </v-container>
</template>


<script>
import Subnav from '../components/Subnav'

export default {
    data: () => ({
      
    }),

    components: {Subnav},

  }

</script>



<style>

.boxThing {
  border-style: solid;
  display: flex;
}

/* .landingContainer {
  height: 10rem;
} */

</style>
