<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="lx el-icon-caidan" style="font-size: 14px; margin-right: 4px;"></i>
          <span>基础表格</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" icon="el-icon-delete" class="handle-del">批量删除</el-button>
        <el-select class="handle-select" v-model="query.address" placeholder="地址">
          <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input class="handle-input" type="text" v-model="query.name" placeholder="用户名"></el-input>
        <el-button type="primary" icon="el-icon-search" class="handle-del">搜索</el-button>
      </div>
      <el-table
        ref="multipleTable"
        border
        :data="tablePage"
        tooltip-effect="dark"
        class="table"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="ID" width="55"></el-table-column>
        <el-table-column prop="name" label="用户名" width="120"></el-table-column>
        <el-table-column label="账户余额">
          <template slot-scope="scope">￥{{scope.row.money}}</template>
        </el-table-column>
        <el-table-column label="头像(查看大图)" align="center">
          <template slot-scope="scope">
            <el-image class="table-td-thumb" :src="scope.row.thumb"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.state === '成功' ? 'success' : (scope.row.state === '失败' ? 'danger' : '')"
            >{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="注册时间"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              style="color: #f00;"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页栏 -->
      <div class="pagination">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="pageIndex"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="pageTotal"
        ></el-pagination>
      </div>
    </div>
    <!-- 编辑弹出框 -->
    <el-dialog title="提示" :visible.sync="editVisible" width="30%" center>
      <el-form label-position="right" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import deepClone from "../../../utils/DeepClone";
import { TestList } from "../../../api/index";
export default {
  components: {},
  props: {},
  data() {
    return {
      cities: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ],
      tableData: [
        //总数据
        {
          id: 1,
          name: "王小虎",
          money: 392,
          thumb: "https://lin-xin.gitee.io/images/post/wms.png",
          date: "2016-05-03",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "成功"
        },
        {
          id: 2,
          date: "2016-05-02",
          name: "没点逼数",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "失败"
        },
        {
          id: 3,
          date: "2016-05-04",
          name: "我太难了",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 4,
          date: "2016-05-01",
          name: "见鬼了",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 5,
          date: "2016-05-08",
          name: "阿里路亚",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 6,
          date: "2016-05-06",
          name: "霸天虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 7,
          name: "大傻逼",
          money: 392,
          thumb: "https://lin-xin.gitee.io/images/post/wms.png",
          date: "2016-05-03",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "成功"
        },
        {
          id: 8,
          date: "2016-05-02",
          name: "我也是服了",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "失败"
        },
        {
          id: 9,
          date: "2016-05-04",
          name: "有病吧",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 10,
          date: "2016-05-01",
          name: "见识了",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 11,
          date: "2016-05-08",
          name: "你谁呀",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 12,
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 13,
          name: "大傻逼",
          money: 392,
          thumb: "https://lin-xin.gitee.io/images/post/wms.png",
          date: "2016-05-03",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "成功"
        },
        {
          id: 14,
          date: "2016-05-02",
          name: "我也是服了",
          address: "上海市普陀区金沙江路 1518 弄",
          state: "失败"
        },
        {
          id: 15,
          date: "2016-05-04",
          name: "有病吧",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 16,
          date: "2016-05-01",
          name: "见识了",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 17,
          date: "2016-05-08",
          name: "你谁呀",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      tablePage: [], //当前页显示的数据
      idx: -1, //列表项ID
      form: {}, //列表项数据
      editVisible: false, //是否显示对话框
      query: {
        address: "",
        name: ""
      },
      pageIndex: 1, //首次加载显示的列表页
      pageSize: 5, //每页显示的列表数量
      pageTotal: 0 //列表总数
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val = 1) {
      this.pageTotal = this.tableData.length;
      this.pageIndex = val;
      var dataList = deepClone(this.tableData);
      let startNumber = (val - 1) * 5;
      this.tablePage = dataList.splice(startNumber, 5);
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    // 编辑操作
    handleEdit(index, row) {
      this.idx = index;
      this.form = deepClone(row); // 深克隆数据
      this.editVisible = true;
    },
    // 保存操作
    saveEdit() {
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
      this.$set(this.tableData, this.idx, this.form);
      this.handleCurrentChange(this.pageIndex);
    },
    // 删除数据
    handleDelete(index, row) {
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning"
      }).then(() => {
        this.$message.success("删除成功");
        this.tableData.splice(index, 1);
        this.handleCurrentChange(this.pageIndex);
      });
    }
  },
  created() {},
  mounted() {
    console.log("进入了基本表格子页面");
    /* 
    // 数据列表请求接口
    TestList()
      .then(res => {
        console.log("请求成功");
        console.log(res);
      })
      .catch(err => {
        console.log("请求失败");
        console.log(err);
      });
     */
    // 获取列表项总数
    this.pageTotal = this.tableData.length;
    // 调用当前也许显示的列表数据
    this.handleCurrentChange(1);
  }
};
</script>

<style lang="scss" scoped>
.container {
  .handle-box {
    margin-bottom: 20px;
    .handle-del {
      margin-right: 10px;
    }
    .handle-select {
      width: 120px;
      margin-right: 10px;
    }
    .handle-input {
      width: 300px;
      margin-right: 10px;
    }
  }
  .table {
    width: 100%;
    font-size: 14px;
    .table-td-thumb {
      display: block;
      margin: auto;
      width: 40px;
      height: 40px;
    }
  }
}
</style>