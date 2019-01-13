<template lang="pug">
  main(class="login-container")
    div(class="wrap-login")
      h1(class="title") 로그인
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="sass">
.login-container
  width: 100%;
  height: 100%;
  background: #FAFAFA;
  .wrap-login
    padding: 16px;
    background: #FFF;
    .title
      font-size: 16px;
</style>
