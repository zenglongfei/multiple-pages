<template>
  <h1 @click="goHome">这是登陆页面</h1>
</template>

<script>
export default {
  name: 'login',
  methods: {
    goHome () {
      location.assign('index.html')
    }
  }
}
</script>

<style scoped>

</style>
