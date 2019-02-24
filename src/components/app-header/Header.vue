<template lang="pug">
  main(class="header-container")
    span(class="login" @click="emitClick") 로그인
</template>

<script>
export default {
  name: 'app-header',
  methods: {
    emitClick () {
      this.$emit('login')
    }
  }
}
</script>

<style lang="sass">
  .header-container
    position: fixed
    top: 0
    left: 0
    right: 0
    width: 100%
    height: 56px
    box-shadow: 0 2px 4px -1px rgba(#000, 0.2), 0 1px 4px 0 rgba(#000, 0.12), 0 4px 5px 0 rgba(#000, 0.14)
    z-index: 20
    .login
      position: absolute
      right: 16px
      font-size: 14px
      font-weight: bold
      line-height: 30px
      color: rgba(#000, 0.8)
</style>
