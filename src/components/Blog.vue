<template>
  <div>
    <h1>Blog</h1>
    <h2>Currently under construction!</h2> 
    <v-progress-linear :indeterminate="true"></v-progress-linear>
    <div class="text-xs-center">
      <img :src=safetyIconLocation></img>
    </div>
    <!-- <h1>{{aNumber}}</h1>
    <v-btn light @click="increaseANumber()">This is a button</v-btn> -->
  </div>
</template>

<script>
import { setInterval } from 'timers';

export default {
  name: 'Login',
  
  data () {
    return {
      aNumber: 1,
      someWords: "heyehhey!",
      somePercentage: 0,
      safetyIconLocation: "",
      safetyIconArray: [
        "/img/svg/ISO_7010_W001.svg",
        "/img/svg/ISO_7010_W002.svg",
        "/img/svg/ISO_7010_W003.svg",
        "/img/svg/ISO_7010_W004.svg",
        "/img/svg/ISO_7010_W005.svg",
        "/img/svg/ISO_7010_W006.svg",
        "/img/svg/ISO_7010_W007.svg",
        "/img/svg/ISO_7010_W008.svg",
        "/img/svg/ISO_7010_W009.svg",
        "/img/svg/ISO_7010_W010.svg",
        "/img/svg/ISO_7010_W011.svg",
        "/img/svg/ISO_7010_W012.svg",
        "/img/svg/ISO_7010_W013.svg",
        "/img/svg/ISO_7010_W014.svg",
        "/img/svg/ISO_7010_W015.svg",
        "/img/svg/ISO_7010_W016.svg",
        "/img/svg/ISO_7010_W017.svg",
        "/img/svg/ISO_7010_W018.svg",
        "/img/svg/ISO_7010_W019.svg",
        "/img/svg/ISO_7010_W020.svg",
        "/img/svg/ISO_7010_W021.svg",
        "/img/svg/ISO_7010_W022.svg",
        "/img/svg/ISO_7010_W023.svg",
        "/img/svg/ISO_7010_W024.svg",
        "/img/svg/ISO_7010_W025.svg",
        "/img/svg/ISO_7010_W026.svg",
        "/img/svg/ISO_7010_W027.svg",
        "/img/svg/ISO_7010_W028.svg",
        "/img/svg/ISO_7010_W029.svg",
      ],
      safetyIconIndex: 0 
    }
  },
  created: function() {
    this.progress();
  },
  methods: {
    
    increaseANumber: function () {
      this.aNumber += 1;
    },

    percentageIncreasing: function() {
      if (this.somePercentage == 100) {
        this.somePercentage = 0
      } else {
        this.somePercentage += 10
      }
    },

    arrayIndexIncreasing: function() {
      if (this.safetyIconIndex == 30) {
        this.safetyIconIndex = 0
      } else {
        this.safetyIconIndex += 1
      }
      this.safetyIconLocation = this.safetyIconArray[this.safetyIconIndex]
      // console.log('safetyIconLocation',this.safetyIconLocation)

    },

    progress: function() {
      setInterval(this.percentageIncreasing, 1000);
      setInterval(this.arrayIndexIncreasing, 1000);
    }
  }
}

</script>

<style>

</style>
