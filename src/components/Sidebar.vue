<template>
  <div class="sidebar">
    <!-- <el-radio-group v-model="collapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      class="sidebar-el-menu"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "./bus";
export default {
  components: {},
  props: {},
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "lx el-icon-shouye",
          index: "dashboard",
          title: "系统首页"
        },
        {
          icon: "lx el-icon-caidan",
          index: "table",
          title: "基础表格"
        },
        {
          icon: "lx el-icon-tabordersinactive",
          index: "tabs",
          title: "tab选项卡"
        },
        {
          icon: "lx el-icon-jsform",
          index: "3",
          title: "表单相关",
          subs: [
            {
              index: "form",
              title: "基本表单"
            },
            {
              index: "3-2",
              title: "三级菜单",
              subs: [
                {
                  index: "editor",
                  title: "富文本编辑器"
                },
                {
                  index: "markdown",
                  title: "markdown编辑器"
                }
              ]
            },
            {
              index: "upload",
              title: "文件上传"
            }
          ]
        },
        {
          icon: "lx el-icon-biaoqing",
          index: "icon",
          title: "自定义图标"
        },
        {
          icon: "el-icon-pie-chart",
          index: "charts",
          title: "schart图表"
        },
        {
          icon: "el-icon-rank",
          index: "6",
          title: "拖拽组件",
          subs: [
            {
              index: "drag",
              title: "拖拽列表"
            },
            {
              index: "dialog",
              title: "拖拽弹框"
            }
          ]
        },
        {
          icon: "lx el-icon-979caidan_zhishiditu",
          index: "i18n",
          title: "国际化功能"
        },
        {
          icon: "lx el-icon-jinggao",
          index: "7",
          title: "错误处理",
          subs: [
            {
              index: "permission",
              title: "权限测试"
            },
            {
              index: "404",
              title: "404页面"
            }
          ]
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      console.log(msg);
      this.collapse = msg;
      bus.$emit('collapse-content', msg);
    });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.sidebar {
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }
  .sidebar-el-menu {
height: 100%;
  }
}

.lx {
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
</style>