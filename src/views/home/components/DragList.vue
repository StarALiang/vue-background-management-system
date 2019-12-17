<template>
  <div>
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
        <div class="drag-box-item">
          <div class="item-title">todo</div>
          <draggable v-model="todo" :options="dragOptions" @remove="removeHandle">
            <transition-group class="drag-item" tag="div" id="todo">
              <div class="drag-list" v-for="item in todo" :key="item.id">{{item.content}}</div>
            </transition-group>
          </draggable>
        </div>
        <div class="drag-box-item">
          <div class="item-title">doing</div>
          <draggable v-model="doing" :options="dragOptions" @remove="removeHandle">
            <transition-group class="drag-item" tag="div" id="doing">
              <div class="drag-list" v-for="item in doing" :key="item.id">{{item.content}}</div>
            </transition-group>
          </draggable>
        </div>
        <div class="drag-box-item">
          <div class="item-title">done</div>
          <draggable v-model="done" :options="dragOptions" @remove="removeHandle">
            <transition-group class="drag-item" tag="div" id="done">
              <div class="drag-list" v-for="item in done" :key="item.id">{{item.content}}</div>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  components: {
    draggable
  },
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
      ],
      doing: [
        {
          id: 1,
          content: "开发登录注册页面"
        },
        {
          id: 2,
          content: "开发头部组件"
        },
        {
          id: 3,
          content: "开发表格相关组件"
        },
        {
          id: 4,
          content: "开发表单相关组件"
        }
      ],
      done: [
        {
          id: 1,
          content: "初始化项目，生成工程目录，完成相关配置"
        },
        {
          id: 2,
          content: "开发项目整体框架"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    removeHandle(event) {
      console.log(event);
      this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.drag-box {
  display: flex;
  justify-content: space-between;
  .drag-box-item {
    flex: 1;
    max-width: 350px;
    min-width: 250px;
    background-color: #eff1f5;
    margin-right: 16px;
    border-radius: 6px;
    border: 1px solid #e1e4e8;
    .item-title {
      font-size: 14px;
      color: #24292e;
      font-weight: 600;
      line-height: 1.5;
      padding: 8px 12px;
    }
    .drag-item {
      height: 500px;
      overflow-y: scroll;
      padding: 0 8px 8px;
      .drag-list {
        border: 1px solid #e1e4e8;
        background-color: #fff;
        padding: 10px;
        margin: 5px 0 10px;
        border-radius: 6px;
        cursor: pointer;
      }
    }
    .drag-item::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>