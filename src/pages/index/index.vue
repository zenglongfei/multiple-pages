<template>
  <h1 @click="goLogin">这是主页</h1>
</template>

<script>
  export default {
    name: 'index',
    methods: {
      goLogin () {
        location.assign('login.html')
      }
    }
  }
</script>

<style scoped>

</style>
