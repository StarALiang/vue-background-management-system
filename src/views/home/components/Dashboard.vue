<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card style="height: 252px; background-color: #fff; margin-bottom: 20px;"></el-card>
        <el-card style="height: 252px; background-color: #fff"></el-card>
      </el-col>
      <el-col :span="16">
        <el-card style="height: 102px; background-color: #fff; margin-bottom: 20px;"></el-card>
        <el-card style="height: 405px; background-color: #fff"></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>