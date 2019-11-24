<template>
  <div class="wrapper">
    <v-head></v-head>
    <div>Home主页</div>
    <v-sidebar></v-sidebar>
    <v-tags></v-tags>
  </div>
</template>

<script>
import vHead from '../../components/Header';
import vSidebar from '../../components/Sidebar';
import vTags from '../../components/Tags';
export default {
  components: {
    vHead,
    vSidebar,
    vTags
  },
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
.wrapper {}
</style>