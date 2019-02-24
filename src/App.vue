<template lang="pug">
  div(id="App")
    app-header
    app-sidebar
    main(class="wrap-main")
      login-index
    app-footer
</template>

<script>
import LoginIndex from '@/views/login/Index'
import { mapMutations, mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'app',
  components: {
    LoginIndex
  },
  created () {
    window.addEventListener('click', this.onClick)
  },
  methods: {
    ...mapMutations(['setTime']),
    onClick () {
      const d = new Date()
      this.setTime(d) // last action time
      
      window.setTimeout(() => {
        
      }, 55000)
    }
  }
}
</script>

<style lang="sass">
#App
  font-family: 'Spoqa Han Sans', 'Spoqa Han Sans KR', 'sans-serif';
  width: 100%;
  height: 100%;
  padding-top: 56px;
  position: relative;
  .wrap-main
    width: 1100px;
    min-height: calc(100vh - 56px);
</style>
