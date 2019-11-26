<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'centent-collapse':collapse}" ref="hello" @click="doClick">主页</div>
    <v-tags></v-tags>
  </div>
</template>

<script>
import vHead from "../../components/Header";
import vSidebar from "../../components/Sidebar";
import vTags from "../../components/Tags";
import bus from "../../components/bus";
export default {
  components: {
    vHead,
    vSidebar,
    vTags
  },
  props: {},
  data() {
    return {
      collapse: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    doClick(e) {
      console.log("啦啦啦");
      bus.$emit("collapse-content", event.target);
    }
  },
  created() {
    console.log("msg");
    console.log(bus);
    console.log(this);
    bus.$on("collapse-content", msg => {
      console.log(msg);
      this.collapse = msg;
    });
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>