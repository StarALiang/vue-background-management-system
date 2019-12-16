<template>
  <div class="wrapper">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-rank"></i> 拖拽组件
        </el-breadcrumb-item>
        <el-breadcrumb-item>拖拽排序</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="drag-box">
        <div class="grag-box-item">
          <div class="item-title">todo</div>
          <!-- <draggable v-model="myArray" :options="dragOptions">
            <transition-group>
              <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
            </transition-group>
          </draggable> -->
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
      dragOptions: {
        animation: 120,
        scroll: true,
        group: "sortlist",
        ghostClass: "ghost-style"
      },
      todo: [
        {
          id: 1,
          content: "开发图表组件"
        },
        {
          id: 2,
          content: "开发拖拽组件"
        },
        {
          id: 3,
          content: "开发权限测试组件"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>