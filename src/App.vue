<template lang="pug">
  div(id="app")
    app-header
    app-sidebar
    main(class="wrap-main")
      login-index
    app-footer
</template>

<script>
import LoginIndex from '@/views/login/Index'

export default {
  name: 'app',
  components: {
    LoginIndex
  }
}
</script>

<style lang="sass">
#app
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Spoqa Han Sans', 'Spoqa Han Sans KR', 'sans-serif';
  width: 100%;
  height: 100%;
  padding-top: 30px;
  position: relative;
  .wrap-main
    width: 1100px;
</style>
