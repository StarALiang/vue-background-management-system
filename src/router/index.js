import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta: { title: '登录页' }
  },
  {
    path: '/home',
    // name: 'home',
    component: () => import('../views/home/Home.vue'),
    meta: { title: '自述文件' },
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/home/components/Dashboard.vue'),
        meta: { title: '系统首页' }
      },
      {
        path: '/table',
        component: () => import('../views/home/components/BaseTable.vue'),
        meta: { title: '基础表格' }
      },
      {
        path: '/Tabs',
        component: () => import('../views/home/components/Tabs.vue'),
        meta: { title: 'tab选项卡' }
      },
      {
        path: '/form',
        component: () => import('../views/home/components/BaseForm.vue'),
        meta: { title: '基本表单' }
      },
      {
        // 富文本编辑器组件
        path: '/editor',
        component: () => import('../views/home/components/VueEditor.vue'),
        meta: { title: '富文本编辑器' }
      },
      {
        // markdown组件
        path: '/markdown',
        component: () => import('../views/home/components/Markdown.vue'),
        meta: { title: 'markdown编辑器' }
      },
      {
        // 自定义图标组件
        path: '/icon',
        component: () => import('../views/home/components/Icon.vue'),
        meta: { title: '自定义图标' }
      },
      {
        // 图片上传组件
        path: '/upload',
        component: () => import('../views/home/components/Upload.vue'),
        meta: { title: '文件上传' }
      },
      {
        // vue-schart组件
        path: '/charts',
        component: () => import('../views/home/components/BaseCharts.vue'),
        meta: { title: 'schart图表' }
      },
      {
        // 拖拽列表组件
        path: '/drag',
        component: () => import('../views/home/components/DragList.vue'),
        meta: { title: '拖拽列表' }
      },
      {
        // 拖拽Dialog组件
        path: '/dialog',
        component: () => import('../views/home/components/DragDialog.vue'),
        meta: { title: '拖拽弹框' }
      },
      {
        // 国际化组件
        path: '/i18n',
        component: () => import('../views/home/components/I18n.vue'),
        meta: { title: '国际化' }
      },
      {
        // 权限页面
        path: '/permission',
        component: () => import('../views/home/components/Permission.vue'),
        meta: { title: '权限测试', permission: true }
      },
      {
        path: '/404',
        component: () => import('../views/home/components/404.vue'),
        meta: { title: '404' }
      },
      {
        path: '/403',
        component: () => import('../views/home/components/403.vue'),
        meta: { title: '403' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
