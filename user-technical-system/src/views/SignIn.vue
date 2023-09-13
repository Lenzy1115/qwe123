<template>
  <div>
    <div>
      注册界面
    </div>
    <el-button type="primary" plain @click="back">返回</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.push('/LogIn')
    }
  }
}
</script>

<style>
</style>
