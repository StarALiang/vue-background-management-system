<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="lx el-icon-tab" style="font-size: 14px; margin-right: 4px;"></i>
          <span>tab选项卡</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-tabs v-model="message" @tab-click="handleClick">
        <el-tab-pane :label="`未读信息(${unread.length})`" name="first">
          <el-table :data="unread" style="width: 100%" :show-header="false">
            <el-table-column label="消息内容">
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column label="按钮" width="120">
              <template slot-scope="scope">
                <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="primary">全部标为已读</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`已读信息(${read.length})`" name="second">
          <el-table :data="read" style="width: 100%" :show-header="false">
            <el-table-column label="消息内容">
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column label="按钮" width="120">
              <template slot-scope="scope">
                <el-button type="danger" size="small" @click="handleRead(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="danger">删除全部</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
          <el-table :data="recycle" style="width: 100%" :show-header="false">
            <el-table-column label="消息内容">
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column label="按钮" width="120">
              <template slot-scope="scope">
                <el-button size="small" @click="handleRead(scope.$index)">还原</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="danger">清空回收站</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      message: "first",
      unread: [
        //未读消息
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        },
        {
          date: "2018-04-19 21:00:00",
          title: "今晚12点整发大红包，先到先得"
        }
      ],
      read: [
        // 已读消息
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        }
      ],
      recycle: [
        // 回收站
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.message-title {
  cursor: pointer;
}
.handle-row {
  margin-top: 30px;
}
</style>