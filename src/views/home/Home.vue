<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <v-tags></v-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
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
  created() {
    bus.$on("collapse-content", msg => {
      this.collapse = msg;
    });
  },
  mounted() {}
};
</script>