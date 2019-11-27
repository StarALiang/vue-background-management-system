<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box">
      <v-tags></v-tags>
      <div>内容</div>
    </div>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>