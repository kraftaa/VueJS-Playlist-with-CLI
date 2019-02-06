<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>


  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'First Vue file'
    }
  },
  methods: {
    greeting: function(){
      return 'hey';
    }
  }
}
</script>

<style>


</style>
