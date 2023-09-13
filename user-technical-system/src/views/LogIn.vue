<template>
  <div>
    <el-button type="primary" plain @click="login">登录</el-button>
    <el-button type="primary" plain @click="signin">注册</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$router.push('/WelcomePage')
    },
    signin () {
      this.$router.push('/SignIn')
    }
  }
}
</script>

<style>
</style>
