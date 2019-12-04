<template>
  <div class="wrapper" v-if="showTags">
    <ul>
      <li
        class="tags-li"
        :class="{'active': isActive(item.path)}"
        v-for="(item, index) in tagsList"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
        <span @click="closeTags(index)"><i class="el-icon-close"></i></span>
      </li>
    </ul>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all" divided>关闭所有</el-dropdown-item>
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
      this.setTags(newValue);
    }
  },
  computed: {
    showTags() {
      if (this.tagsList.length == 1 && this.$route.fullPath == '/dashboard') {
        return false;
      }
      return this.tagsList.length > 0;
    }
  },
  methods: {
    // 设置标签
    setTags(route) {
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
      }
    },
    // 是否选择当前标签栏
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭标签
    handleTags(command) {
      command === 'other' ? this.closeOther() : this.closeAll();
    },
    // 关闭其他标签
    closeOther() {
      let curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = curItem;
    },
    // 关闭全部标签
    closeAll() {
      this.tagsList = [];
      this.$router.push('/home');
    },
    // 关闭单个标签
    closeTags(index) {
      // 删除当前标签
      let delItem = this.tagsList.splice(index, 1)[0];
      // 获取当前标签页或者是上个标签页
      let item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index-1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push('/home');
      }
    }
  },
  created() {
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
    }
    .tags-li:not(.active):hover {
      background-color: #f8f8f8;
    }
    .tags-li.active {
      color: #fff;
      .tags-li-title {
        color: #fff;
      }
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
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
}
</style>