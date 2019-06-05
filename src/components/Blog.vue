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
      somePercentage: 0
    }
  },
  created: function() {
    console.log('initially, aNumber is ...', this.aNumber);
    this.progressCircle();
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

    progressCircle: function() {
      setInterval(this.percentageIncreasing, 1000);
    }

  }
}

</script>

<style>

</style>
