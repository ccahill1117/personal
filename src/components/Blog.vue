<template>
  <div>
    <h1>Blog</h1>
    <div class="text-xs-center">
      <v-progress-circular size=356 :value="somePercentage"></v-progress-circular>
    </div>
    <h1>{{aNumber}}</h1>
    <v-btn light @click="increaseANumber()">This is a button</v-btn>
  </div>
</template>

<script>

export default {
  name: 'Login',
  
  data () {
    return {
      aNumber: 1,
      someWords: "heyehhey!",
      somePercentage: 10
    }
  },
  created: function() {
    console.log('initially, aNumber is ...', this.aNumber);
  },
  methods: {
    
    increaseANumber: function () {
      this.aNumber += 1;
    },

    percentageIncreasing: function() {
      if (this.somePercentage == 100) {
        this.somePercentage = 0
      } else {
        this.somePercentage += 1
      }
    },

    progressCircle: function() {
      nIntervId = setInterval(flashText, 100);
    }

  }
}

</script>

<style>

</style>
