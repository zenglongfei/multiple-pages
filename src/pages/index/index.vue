<template>
  <div>
    <loading-component/>
    <h1 @click="goLogin">这是主页</h1>
  </div>
</template>

<script>
import LoadingComponent from '../../components/loadingComponent'

export default {
  components: {LoadingComponent},
  name: 'index',
  methods: {
    goLogin () {
      location.assign('login.html')
    }
  }
}
</script>

<style scoped>
html {
  font-size: 18px;
}
</style>
