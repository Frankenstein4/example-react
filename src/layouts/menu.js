export default [
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
                {
                    path: './echarts8',
                    name: '地图',
                    icon: 'smile',
                    component: './Echarts/Echarts8',
                },
                {
                    path: './echarts9',
                    name: '地图geo方式',
                    icon: 'smile',
                    component: './Echarts/Echarts9',
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
                    name: 'class组件子传父/兄弟传值',
                    icon: 'smile',
                    component: './Component/Comp3',
                  },
                  {
                    path: './Comp6',
                    name: '跨组件调用（订阅监听）',
                    icon: 'smile',
                    component: './Component/Comp6',
                  },
                  {
                    path: './Comp8',
                    name: 'Provider/Consumer传值',
                    icon: 'smile',
                    component: './Component/Comp8',
                  },
                  {
                    path: './Comp9',
                    name: 'useReducer透传',
                    icon: 'smile',
                    component: './Component/Comp9',
                  },
                  {
                    path: './Comp12',
                    name: 'useEffact',
                    icon: 'smile',
                    component: './Component/Comp12',
                  },
                  {
                    path: './Comp13',
                    name: '自定义hooks',
                    icon: 'smile',
                    component: './Component/Comp13',
                  },
                  {
                    path: './Comp15',
                    name: 'useMemo和useEffect',
                    icon: 'smile',
                    component: './Component/Comp15',
                  },
                  {
                    path: './Comp14',
                    name: ' useMemo解决透传性能问题',
                    icon: 'smile',
                    component: './Component/Comp14',
                  },
                  {
                    path: './Comp16',
                    name: 'redux示例',
                    icon: 'smile',
                    component: './Component/Comp16',
                  },
                  {
                    path: './Comp17',
                    name: 'redux',
                    icon: 'smile',
                    component: './Component/Comp17',
                  },
                  {
                    path: './Comp20',
                    name: '懒加载',
                    icon: 'smile',
                    component: './Component/Comp20',
                  },
                ]
              },
              {
                path: '/Network',
                name: '网络请求',
                icon: 'smile',
                routes: [
                  {
                    path: './Example1',
                    name: 'react-query',
                    icon: 'smile',
                    component: './Network/Example1',
                  },
                  {
                    path: './Example2',
                    name: 'react中加入iframe',
                    icon: 'smile',
                    component: './Network/Example2',
                  },
                  {
                    path: './Example3',
                    name: '防抖',
                    icon: 'smile',
                    component: './Network/Example3',
                  },
                  {
                    path: './Example4',
                    name: '虚拟列表',
                    icon: 'smile',
                    component: './Network/Example4',
                  },
                  {
                    path: './Example5',
                    name: '省市区级联列表',
                    icon: 'smile',
                    component: './Network/Example5',
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
  
];  