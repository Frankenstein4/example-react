/* 
数据定义规范：

只有一层级的  parentId  null
n层级的      parentId 为上级的key   有path的  path === key

*/

const memu = [
  {
    title: '仪表盘',
    icon: 'icon-yibiaopan',
    path: '/Dashboard',
    key: '/Dashboard',
    parentId: null,
  },
  {
    title: '资产管理',
    icon: 'icon-zichanguanli',
    path: '/AssetManage',
    key: '/AssetManage',
    parentId: null,
    children: [
      {
        title: '快速查询',
        path: 'AQuickQuery',
        key: 'AQuickQuery',
        parentId: '/AssetManage',
        children: [
          {
            key: 10000,
            title: '搜索',
            parentId: 'AQuickQuery',
          },
          {
            key: 10001,
            title: '查看',
            parentId: 'AQuickQuery',
          },
        ],
      },
      {
        title: '资产管理',
        path: 'AssetQuery',
        parentId: '/AssetManage',
        key: 'AssetQuery',
        children: [
          {
            key: 8,
            title: '搜索',
            parentId: 'AssetQuery',
          },
          {
            key: 10101,
            title: '手动录入',
            parentId: 'AssetQuery',
          },
          {
            key: 10102,
            title: '资产复制',
            parentId: 'AssetQuery',
          },
          {
            key: 10103,
            title: '资产移动',
            parentId: 'AssetQuery',
          },
          {
            key: 10104,
            title: '修改',
            parentId: 'AssetQuery',
          },
          {
            key: 10105,
            title: '删除',
            parentId: 'AssetQuery',
          },
        ],
      },
      {
        title: '资产组管理',
        path: 'GroupManage',
        parentId: '/AssetManage',
        key: 'GroupManage',
        children: [
          {
            key: 10200,
            title: '新增',
            parentId: 'GroupManage',
          },
          {
            key: 10201,
            title: '修改',
            parentId: 'GroupManage',
          },
          {
            key: 10202,
            title: '删除',
            parentId: 'GroupManage',
          },
        ],
      },
      {
        title: '资产扫描',
        path: 'ScansInput',
        parentId: '/AssetManage',
        key: 'ScansInput',
        children: [
          {
            title: '扫描任务',
            path: 'ScanningTask',
            key: 'ScanningTask',
            parentId: 'ScansInput',
            children: [
              {
                key: 10300,
                title: '新增',
                parentId: 'ScanningTask',
              },
              {
                key: 10301,
                title: '修改',
                parentId: 'ScanningTask',
              },
              {
                key: 10302,
                title: '删除',
                parentId: 'ScanningTask',
              },
            ],
          },
          {
            title: '扫描服务',
            path: 'ScanningServices',
            key: 'ScanningServices',
            parentId: 'ScansInput',
          },
        ],
      },
    ],
  },
  /*  {
      title: '监控管理',
      icon: 'icon-jiankongguanli',
      path: '/monitor-manage',
      children: [
        {
          title: '资产监控',
          path: 'AssetMonitor',
        },
        {
          title: '监控项',
          path: './AssetMonitor/monitor-items',
          hideChildrenInMenu: true,
          hideInMenu: true,
        },
        {
          title: '监控查询',
          path: './AssetMonitor/monitor-items/monitor-query',
          hideChildrenInMenu: true,
          hideInMenu: true,
        },
        {
          title: '自定义图表',
          path: './custom-monitor',
        },
        {
          title: '监控项',
          path: './custom-monitor/screen',
          hideChildrenInMenu: true,
          hideInMenu: true,
        },
        {
          title: '监控项查看',
          path: './custom-monitor/screen-charts',
          hideChildrenInMenu: true,
          hideInMenu: true,
        },
        {
          title: '采集管理',
          path: './collection-manage',
          children: [
            {
              title: '资产采集配置',
              path: './collection-config',
            },
            {
              title: '采集任务',
              path: './collection-task',
            },
            {
              title: 'SNMP库',
              path: './snmp-library',
            },
            {
              title: 'OID表',
              path: './oid',
              hideChildrenInMenu: true,
              hideInMenu: true,
            },
            {
              title: '采集服务',
              path: './collection-service',
            },
          ],
        },
        {
          title: 'Agent管理',
          path: './agent-manage',
          children: [
            {
              title: '资产Agent配置',
              path: './configure-agent',
            },
            {
              title: 'Agent监控模板',
              path: './monitor-template',
            },
            {
              title: 'Agent监控插件',
              path: './monitor-plug',
            },
          ]
        },
        {
          title: '数据接收服务',
          path: './data-reception',
          component: './DataReception',
        },
      ],
    },
    {
      title: '告警管理',
      icon:'icon-gaojing',
      path: '/AdministrativeAlert',
      children: [
        {
          title: '告警组',
          path: './AlarmSet',
        },
        {
          title: '告警策略组',
          path: './AlarmStrategy',
        },
        {
          title: '告警记录',
          path: './AlarmRecord',
        },
      ]
    },
    {
      title: '网络性能管理',
      icon:'icon-wangluoxingnengjiankong1',
      path: '/npm',
      children: [
        {
          title: '应用和应用组',
          path: './application',
        },
        {
          title: '采集点和标签',
          path: './tag',
        },
        {
          title: '拓扑',
          path: './topology',
        },
        {
          title: '性能分析',
          path: './analyze',
        }
      ]
    },
    {
      title: '账户和权限',
      icon:'icon-zhanghuguanli',
      path: '/AccountsPermissions',
      children: [
        {
          title: '账户',
          path: './Ledger',
        },
        {
          title: '权限',
          path: './Permission',
        },
      ]
    }, */
];

function getAHorizontalMenu(data) {
  let tmp = [];
  function getChildren(data) {
    data.forEach((value) => {
      tmp.push(value);
      if (value.children && value.children.length > 0) {
        getChildren(value.children);
      }
    });
  }
  getChildren(data);
  return tmp;
}


let aHorizontalMenu = getAHorizontalMenu([...memu]);

console.log(aHorizontalMenu);

export default {
  memu,
  aHorizontalMenu,
};
