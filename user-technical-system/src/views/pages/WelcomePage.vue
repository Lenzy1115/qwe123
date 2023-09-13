<template>
  <div class="welcome_container">
      <div class="text">欢迎使用技术分享用户系统！</div>
      <el-button type="primary" plain @click="goannouncementpage">发布公告界面</el-button>
      <el-button type="primary" plain @click="gohomepage">首页界面</el-button>
      <el-button type="primary" plain @click="goinfomanagement">信息管理界面</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goannouncementpage () {
      this.$router.push('/AnnouncementPage')
    },
    gohomepage () {
      this.$router.push('/HomePage')
    },
    goinfomanagement () {
      this.$router.push('/InfoManagement')
    }
  }
}
</script>

<style>
  .welcome_container {
      background: url("https://s3.bmp.ovh/imgs/2021/10/e44cc1a959c9f7d8.png");
      height: 100%;
  }
.text {
      text-align: center;
      padding-top: 23%;
      font-size: 30px;

  }
  .el-main {
  padding: 0 !important;
}
</style>
