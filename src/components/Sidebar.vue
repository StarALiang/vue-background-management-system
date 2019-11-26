<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :collapse="collapse">侧边栏</el-menu>
  </div>
</template>

<script>
import bus from "./bus";
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
  methods: {},
  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      console.log(msg);
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>