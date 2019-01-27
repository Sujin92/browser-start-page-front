<template lang="pug">
  main(class="wrap-login")
    div(class="wrap-components")
      h1(class="title") 로그인
      div(class="row")
        label(class="label" for="id") 아이디 입력하기
        input(type="text" name="id" class="input")
      div(class="row")
        label(class="label" for="password") 비밀번호
        input(type="password" name="password" class="input")

</template>

<script>
export default {
  name: 'login-index'
}
</script>

<style lang="sass">
.wrap-login
  width: 100%
  height: 100%
  background: #FAFAFA
  .wrap-components
    background: #FFF
    .title
      font-size: 16px
</style>
