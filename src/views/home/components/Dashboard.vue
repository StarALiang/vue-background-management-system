<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card style="margin-bottom: 20px;" shadow="hover">
          <div class="user-info">
            <img class="user-avator" src="../../../assets/img/img.jpg" />
            <div class="user-info-cont">
              <div class="user-info-name">admin</div>
              <div class="user-info-role">超级管理员</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2020-01-01</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>杭州</span>
          </div>
        </el-card>
        <el-card style="height: 252px;  " shadow="hover">
          <div slot="header">
            <span>语言详情</span>
          </div>
          <div>
            <span>Vue</span>
            <el-progress :percentage="71.3" color="#42b983"></el-progress>
            <span>JavaScript</span>
            <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
            <span>Css</span>
            <el-progress :percentage="13.7"></el-progress>
            <span>HTML</span>
            <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card shadow="hover" body-style="padding: 0">
              <div class="grid-box grid-con-1">
                <i class="lx el-icon-yonghuming grid-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">4891</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" body-style="padding: 0">
              <div class="grid-box grid-con-2">
                <i class="lx el-icon-tixing grid-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">274</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" body-style="padding: 0">
              <div class="grid-box grid-con-3">
                <i class="lx el-icon-suobanxin grid-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">28023</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card style="height: 405px; background-color: #fff" shadow="hover">
          <div slot="header">
            <span>代办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
          </div>
          <el-table :data="todoList" :show-header="false" style="width: 100%">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">
                <div
                  class="todo-item"
                  :class="{'todo-item-del': scope.row.status}"
                >{{scope.row.date}}</div>
              </template>
            </el-table-column>
            <el-table-column label="内容" show-overflow-tooltip>
              <template slot-scope="scope">
                <div
                  class="todo-item"
                  :class="{'todo-item-del': scope.row.status}"
                >{{scope.row.title}}</div>
              </template>
            </el-table-column>
            <el-table-column align="right">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
            <ve-histogram :data="chartData"></ve-histogram>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
            <ve-pie :data="chartData"></ve-pie>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      todoList: [
        {
          date: "2016-05-09",
          title: "今天要修复100个bug",
          status: false
        },
        {
          date: "2016-05-08",
          title: "今天要修复100个bug",
          status: false
        },
        {
          date: "2016-05-08",
          title: "今天要写100行代码加几个bug吧",
          status: false
        },
        {
          date: "2016-05-07",
          title: "今天要修复100个bug",
          status: false
        },
        {
          date: "2016-05-06",
          title: "今天要修复100个bug",
          status: true
        },
        {
          date: "2016-05-03",
          title: "今天要写100行代码加几个bug吧",
          status: true
        }
      ],
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单量"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单量: 32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单量: 26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单量: 76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单量: 49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单量: 323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单量: 578 }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 删除该列表消息
    handleDelete(index, row) {
      this.todoList.splice(index, 1);
    }
  },
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
  .el-col {
    border-radius: 4px;
    .user-info {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 2px solid #ccc;
      margin-bottom: 20px;
      .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      .user-info-cont {
        padding-left: 50px;
        flex: 1;
        .user-info-name {
          font-size: 30px;
          color: #222;
        }
        .user-info-role {
          font-size: 14px;
          color: #999;
        }
      }
    }
    .user-info-list {
      font-size: 14px;
      color: #999;
      line-height: 25px;
      span {
        margin-left: 70px;
      }
    }
  }
  .grid-box {
    display: flex;
    align-items: center;
    padding: 0;
    &.grid-con-1 {
      .grid-icon {
        background-color: rgb(45, 140, 240);
      }
      .grid-num {
        color: rgb(45, 140, 240);
      }
    }
    &.grid-con-2 {
      .grid-icon {
        background-color: rgb(100, 213, 114);
      }
      .grid-num {
        color: rgb(100, 213, 114);
      }
    }
    &.grid-con-3 {
      .grid-icon {
        background-color: rgb(242, 94, 67);
      }
      .grid-num {
        color: rgb(242, 94, 67);
      }
    }
    .grid-icon {
      width: 100px;
      height: 100px;
      color: #fff;
      font-size: 50px;
      text-align: center;
      line-height: 100px;
    }
    .grid-cont-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 14px;
      color: #999;
      .grid-num {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
  .todo-item {
    font-size: 14px;
    &.todo-item-del {
      text-decoration: line-through;
      color: #999;
    }
  }
}
</style>