<template>
  <div class="wrapper">
    <ul>
      <li class="tags-li active" v-for="(item, index) in tagsList" :key="index">
        <router-link to="/dashboard" class="tags-li-title active">{{item.title}}</router-link>
        <span>
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown>
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tagsList: []
    };
  },
  watch: {
    $route(newValue, oldValue) {
      console.log("$route监听");
      console.log(newValue);
      console.log(oldValue);
      this.setTags(newValue);
    }
  },
  computed: {},
  methods: {
    // 设置标签
    setTags(route) {
      console.log(route);
      // 判断的当前页面已经在标签列表中
      let isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[0].name
        });
        console.log(this.tagsList);
      }
    }
  },
  created() {
    console.log("路由router");
    console.log(this.$route);
    console.log(this.$router);
    this.setTags(this.$route);
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 30px;
  background-color: #fff;
  padding-right: 120px;
  box-sizing: border-box;
  box-shadow: 0 5px 10px #ddd;
  overflow: hidden;
  ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .tags-li {
      float: left;
      height: 23px;
      line-height: 23px;
      background: #fff;
      border: 1px solid #e9eaec;
      padding: 0 5px 0 12px;
      margin: 3px 5px 2px 3px;
      border-radius: 3px;
      color: #666;
      font-size: 12px;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s ease-in;
      .tags-li-title {
        float: left;
        max-width: 80px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-right: 5px;
        color: #666;
      }
      .tags-li-title.active {
        color: #fff;
      }
    }
    .tags-li:not(.active):hover {
      background-color: #f8f8f8;
    }
    .tags-li.active {
      color: #fff;
    }
  }
  .tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    width: 110px;
    height: 30px;
    background-color: #fff;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
    z-index: 10;
  }
}
</style>