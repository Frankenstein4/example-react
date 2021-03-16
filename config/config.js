// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      name: 'loginIn',
      path: '/login',
      component: './my',
    },
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome管理员',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: '/user-list',
              name: '用户列表',
              icon: 'smile',
              component: './myUser',
            },
            {
              path: '/echarts',
              name: 'echarts图表',
              icon: 'smile',
              routes:[
                {
                  path: './echarts1',
                  name: '入门柱状图',
                  icon: 'smile',
                  component: './Echarts/Echarts1/index',
                },
                {
                  path: './echarts2',
                  name: '天气折线图',
                  icon: 'smile',
                  component: './Echarts/Echarts2/index',
                },
                {
                  path: './echarts3',
                  name: '外部拓扑图',
                  icon: 'smile',
                  component: './Echarts/Echarts3/index',
                },
                {
                  path: './echarts4',
                  name: '渐变折线图',
                  icon: 'smile',
                  component: './Echarts/Echarts4/index',
                },
                {
                  path: './echarts5',
                  name: '甜甜圈图',
                  icon: 'smile',
                  component: './Echarts/Echarts5/index',
                },
                {
                  path: './echarts6',
                  name: 'echarts-for-react封装图表',
                  icon: 'smile',
                  component: './Echarts/Echarts6/index',
                },
                {
                  path: './echarts7',
                  name: 'echarts-for-react封装图表2',
                  icon: 'smile',
                  component: './Echarts/Echarts7/index',
                },
              ]
            },
            {
              path: '/table1',
              name: '列表',
              icon: 'smile',
              //component: './Table/index',
              routes: [
                {
                  path: './table1',
                  name: '表格样式1',
                  icon: 'smile',
                  component: './Table/Table2/index',
                },
                {
                  path: './table2',
                  name: '表格样式2',
                  icon: 'smile',
                  component: './Table/index',
                },
                {
                  path: './table3',
                  name: '表格样式3',
                  icon: 'smile',
                  component: './Table/Table3/index',
                },
                {
                  path: './table4',
                  name: '关系图',
                  icon: 'smile',
                  component: './Table/Table4/index',
                },
                {
                  path: './table5',
                  name: '可编辑单元格',
                  icon: 'smile',
                  component: './Table/Table5/index',
                },
                {
                  path: './table6',
                  name: '可展开表格',
                  icon: 'smile',
                  component: './Table/Table6/index',
                },
                {
                  path: './table7',
                  name: '测试',
                  icon: 'smile',
                  component: './Table/Table7/index',
                },
                {
                  path: './table8',
                  name: '搜索下拉框',
                  icon: 'smile',
                  component: './Table/Table8/index',
                },
                {
                  path: './table9',
                  name: '下拉框联动',
                  icon: 'smile',
                  component: './Table/Table9/index',
                },
                {
                  path: './table10',
                  name: '父子组件传值',
                  icon: 'smile',
                  component: './Table/Table10/index',
                },
                {
                  path: './table11',
                  name: '父子组件传值1',
                  icon: 'smile',
                  component: './Table/Table11/index',
                },
                {
                  path: './table12',
                  name: '可编辑表格2',
                  icon: 'smile',
                  component: './Table/Table12/index',
                },
                {
                    path: './table13',
                    name: '行/列合并',
                    icon: 'smile',
                    component: './Table/Table13/index',
                  },
              ],
            },
            {
              path: '/Tree',
              name: '树',
              icon: 'smile',
              routes: [
                {
                  path: './Tree1',
                  name: '树组件',
                  icon: 'smile',
                  component: './Tree/Tree1',
                },
                {
                  path: './Tree3',
                  name: '示例',
                  icon: 'smile',
                  component: './Tree/Tree3',
                },
                {
                  path: './Tree4',
                  name: '树穿梭框',
                  icon: 'smile',
                  component: './Tree/Tree4',
                },
                {
                  path: './Tree5',
                  name: 'select树',
                  icon: 'smile',
                  component: './Tree/Tree5',
                },
                {
                  path: './Tree6',
                  name: '可搜索可选择1',
                  icon: 'smile',
                  component: './Tree/Tree6',
                },
                {
                  path: './Tree7',
                  name: '可搜索可选择2',
                  icon: 'smile',
                  component: './Tree/Tree7',
                },
                {
                  path: './Tree8',
                  name: '可输入可点选',
                  icon: 'smile',
                  component: './Tree/Tree8',
                },
                {
                    path: './Tree9',
                    name: '可拖拽组件',
                    icon: 'smile',
                    component: './Tree/Tree9',
                  },
              ]
            },
            {
              path: '/Step',
              name: '示例',
              icon: 'smile',
              routes: [
                {
                  path: './Step1',
                  name: '步骤条',
                  icon: 'smile',
                  component: './Step/Step1',
                },
                {
                  path: './Step2',
                  name: '区域瞄点功能',
                  icon: 'smile',
                  component: './Step/Step2',
                },
                {
                  path: './Step3',
                  name: '时间线',
                  icon: 'smile',
                  component: './Step/Step3',
                },
                {
                  path: './Step4',
                  name: '分布表单',
                  icon: 'smile',
                  component: './Step/Step4',
                },
                {
                  path: './Step5',
                  name: '批量处理（高级表格）',
                  icon: 'smile',
                  component: './Step/Step5',
                },
                {
                  path: './Step6',
                  name: '可编辑行（高级表格）',
                  icon: 'smile',
                  component: './Step/Step6',
                }
              ]
            },
            {
                path: '/Component',
                name: '关于组件',
                icon: 'smile',
                routes: [
                  {
                    path: './Comp1',
                    name: 'class组件父传子',
                    icon: 'smile',
                    component: './Component/Comp1',
                  },
                  {
                    path: './Comp3',
                    name: 'class组件子传父',
                    icon: 'smile',
                    component: './Component/Comp3',
                  },
                ]
              },
            {
              path: '/admin',
              name: 'admin111',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page222',
                  icon: 'smile',
                  component: './Welcome',
                  authority: ['admin'],
                },
              ],
            },
            {
              name: 'list.table-list333',
              icon: 'table',
              path: '/list',
              component: './ListTableList',
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,//主题颜色设置
    'font-size-base': '14px',
    'badge-font-size': '12px',
    'btn-font-size-lg': '@font-size-base',
    'menu-dark-bg': '#43497D',
    'menu-dark-submenu-bg': '#5760A1',
    'layout-sider-background': '#5760A1',
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
