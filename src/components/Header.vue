<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChange">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullsreen">
          <i class="el-icon-rank"></i>
        </div>
        <div class="user-avator">
          <img src="../assets/img/img.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      collapse: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 侧边栏折叠
    collapseChange() {
      this.collapse = !this.collapse;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background-color: #242f42;
  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }
  .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }
  .header-right {
    float: right;
    margin-right: 50px;
    .header-user-con {
      display: flex;
      height: 70px;
      align-items: center;
      .user-avator {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>