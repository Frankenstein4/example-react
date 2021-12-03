/* 
数据定义规范：

只有一层级的  parentId  null
n层级的      parentId 为上级的key   有key的    key === path


*/

const memu = [
    {
      title: '仪表盘',
      icon: 'icon-yibiaopan',
      path: '/Dashboard',
      component: './Dashboard',
      key: '/Dashboard',
      parentId: null,
      children: [
        {
            key: 10010,
            title: '查看',
            parentId: '/Dashboard',
        },
      ]
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
          component: './AssetManage/AQuickQuery',
          key:'AQuickQuery',
          parentId: '/AssetManage',
          children: [
            {
                key: 10020,
                title: '查看',
                parentId: 'AQuickQuery',
            },
          ]
        },
        {
          title: '资产管理',
          path: 'AssetQuery',
          component: './AssetManage/AssetQuery',
          key:'AssetQuery',
          parentId: '/AssetManage',
          children: [
            {
                key: 10030,
                title: '查看',
                parentId: 'AssetQuery',
            },
            {
                key: 10031,
                title: '编辑',
                parentId: 'AssetQuery',
            },
          ]
        },
        {
          title: '资产组管理',
          path: 'GroupManage',
          component: './AssetManage/GroupManage',
          key:'GroupManage',
          parentId: '/AssetManage',
          children:[
            {
                key: 10040,
                title: '查看',
                parentId: 'GroupManage',
            },
            {
                key: 10041,
                title: '编辑',
                parentId: 'GroupManage',
            },
          ]
        },
        {
          title: '资产扫描',
          path: 'ScansInput',
          key:'ScansInput',
          parentId: '/AssetManage',
          children: [
            {
              title: '扫描任务',
              path: 'ScanningTask',
              component: './AssetManage/ScansInput/ScanningTask',
              key:'ScanningTask',
              parentId: 'ScansInput',
              children:[
                {
                    key: 10050,
                    title: '查看',
                    parentId: 'ScanningTask',
                },
                {
                    key: 10051,
                    title: '编辑',
                    parentId: 'ScanningTask',
                },
              ]
            },
            {
              title: '扫描服务',
              path: 'ScanningServices',
              component: './AssetManage/ScansInput/ScanService',
              key:'ScanningServices',
              parentId: 'ScansInput',
              children:[
                {
                    key: 10060,
                    title: '查看',
                    parentId: 'ScanningServices',
                },
                {
                    key: 10061,
                    title: '编辑',
                    parentId: 'ScanningServices',
                },
              ]
            }
          ]
        }
      ]
    },
    {
      title: '监控管理',
      icon: 'icon-jiankongguanli',
      path: '/monitor-manage',
      key:'/monitor-manage',
      parentId: null,
      children: [
        {
          title: '资产监控',
          path: 'AssetMonitor',
          component: './MonitorManage/AssetMonitor',
          key:'AssetMonitor',
          parentId: '/monitor-manage',
          children:[
            {
                key: 20010,
                title: '查看',
                parentId: 'AssetMonitor',
            },
          ]
        },
        {
          title: '自定义图表',
          path: 'custom-monitor',
          component: './MonitorManage/CustomMonitor',
          key:'custom-monitor',
          parentId: '/monitor-manage',
          children:[
            {
                key: 20020,
                title: '查看',
                parentId: 'custom-monitor',
            },
            {
                key: 20021,
                title: '编辑',
                parentId: 'custom-monitor',
            },
          ]
        },
        {
          title: '监控项',
          path: 'screen',
          hideChildrenInMenu: true,
          hideInMenu: true,
          component: './MonitorManage/CustomMonitor/Component/Screen',
          key:'screen',
          parentId: '/monitor-manage',
          children:[
            {
                key: 20030,
                title: '查看',
                parentId: 'screen',
            },
            {
                key: 20031,
                title: '编辑',
                parentId: 'screen',
            },
          ]
        },
        {
          title: '监控项查看',
          path: 'screen-charts',
          hideChildrenInMenu: true,
          hideInMenu: true,
          component: './MonitorManage/CustomMonitor/Component/ScreenCharts',
          key:'screen-charts',
          parentId: '/monitor-manage',
          children:[
            {
                key: 20040,
                title: '查看',
                parentId: 'screen-charts',
            },
          ]
        },
        {
          title: '采集管理',
          path: 'collection-manage',
          key:'collection-manage',
          parentId: '/monitor-manage',
          children: [
            {
              title: '资产采集配置',
              path: 'collection-config',
              component: './MonitorManage/CollectionManage/AssetsCollectionConfig',
              key:'collection-config',
              parentId: 'collection-manage',
              children:[
                {
                    key: 20050,
                    title: '查看',
                    parentId: 'collection-config',
                },
                {
                    key: 20051,
                    title: '编辑',
                    parentId: 'collection-config',
                },
              ]
            },
            {
              title: '采集任务',
              path: 'collection-task',
              component: './MonitorManage/CollectionManage/CollectionTask',
              key:'collection-task',
              parentId: 'collection-manage',
              children:[
                {
                    key: 20060,
                    title: '查看',
                    parentId: 'collection-task',
                },
                {
                    key: 20061,
                    title: '编辑',
                    parentId: 'collection-task',
                },
              ]
            },
            {
              title: 'SNMP库',
              path: 'snmp-library',
              component: './MonitorManage/CollectionManage/SNMPlibrary',
              key:'snmp-library',
              parentId: 'collection-manage',
              children:[
                {
                    key: 20070,
                    title: '查看',
                    parentId: 'snmp-library',
                },
                {
                    key: 20071,
                    title: '编辑',
                    parentId: 'snmp-library',
                },
              ]
            },
            {
              title: 'OID表',
              path: 'oid',
              hideChildrenInMenu: true,
              hideInMenu: true,
              component: './MonitorManage/CollectionManage/SNMPlibrary/OIDTable',
              key:'oid',
              parentId: 'collection-manage',
              children:[
                {
                    key: 20080,
                    title: '查看',
                    parentId: 'oid',
                },
                {
                    key: 20081,
                    title: '编辑',
                    parentId: 'oid',
                },
              ]
            },
            {
              title: '采集服务',
              path: 'collection-service',
              component: './MonitorManage/CollectionManage/CollectionService',
              key:'collection-service',
              parentId: 'collection-manage',
              children:[
                {
                    key: 20090,
                    title: '查看',
                    parentId: 'collection-service',
                },
                {
                    key: 20091,
                    title: '编辑',
                    parentId: 'collection-service',
                },
              ]
            },
          ],
        },
        {
          title: 'Agent管理',
          path: 'agent-manage',
          key:'agent-manage',
          parentId: '/monitor-manage',
          children: [
            {
              title: '资产Agent配置',
              path: 'configure-agent',
              component: './MonitorManage/AgentManage/ConfigureAgent',
              key:'configure-agent',
              parentId: 'agent-manage',
              children:[
                {
                    key: 20100,
                    title: '查看',
                    parentId: 'configure-agent',
                },
                {
                    key: 20101,
                    title: '编辑',
                    parentId: 'configure-agent',
                },
              ]
            },
            {
              title: 'Agent监控模板',
              path: 'monitor-template',
              component: './MonitorManage/AgentManage/MonitorAgent',
              key:'monitor-template',
              parentId: 'agent-manage',
              children:[
                {
                    key: 20110,
                    title: '查看',
                    parentId: 'configure-agent',
                },
                {
                    key: 20111,
                    title: '编辑',
                    parentId: 'configure-agent',
                },
              ]
            },
            {
              title: 'Agent监控插件',
              path: 'monitor-plug',
              component: './MonitorManage/AgentManage/PlugAgent',
              key:'monitor-plug',
              parentId: 'agent-manage',
              children:[
                {
                    key: 20120,
                    title: '查看',
                    parentId: 'monitor-plug',
                },
                {
                    key: 20121,
                    title: '编辑',
                    parentId: 'monitor-plug',
                },
              ]
            },

          ]
        },
        {
          title: '数据接收服务',
          path: 'data-reception',
          component: './DataReception',
          key:'data-reception',
          parentId: '/monitor-manage',
          children:[
            {
                key: 20130,
                title: '查看',
                parentId: 'data-reception',
            },
          ]
        },
      ],
    },
    {
      title: '告警管理',
      icon:'icon-gaojing',
      path: '/AdministrativeAlert',
      key:'/AdministrativeAlert',
      parentId: null,
      children: [
        {
          title: '告警组',
          path: 'AlarmSet',
          component: './AdministrativeAlert/AlarmSet',
          key:'AlarmSet',
          parentId: '/AdministrativeAlert',
          children:[
            {
                key: 30010,
                title: '查看',
                parentId: 'AlarmSet',
            },
            {
                key: 30011,
                title: '编辑',
                parentId: 'AlarmSet',
            },
          ]
        },
        {
          title: '告警策略组',
          path: 'AlarmStrategy',
          component: './AdministrativeAlert/AlarmStrategy',
          key:'AlarmStrategy',
          parentId: '/AdministrativeAlert',
          children:[
            {
                key: 30020,
                title: '查看',
                parentId: 'AlarmStrategy',
            },
            {
                key: 30021,
                title: '编辑',
                parentId: 'AlarmStrategy',
            },
          ]
        },
        {
          title: '告警记录',
          path: 'AlarmRecord',
          component: './AdministrativeAlert/AlarmRecord',
          key:'AlarmRecord',
          parentId: '/AdministrativeAlert',
          children:[
            {
                key: 30030,
                title: '查看',
                parentId: 'AlarmRecord',
            },
            {
                key: 30031,
                title: '编辑',
                parentId: 'AlarmRecord',
            },
          ]
        },
      ]
    },
    {
      title: '网络性能管理',
      icon:'icon-wangluoxingnengjiankong1',
      path: '/npm',
      key:'/npm',
      parentId: null,
      children: [
        {
          title: '应用和应用组',
          path: 'application',
          component: './Npm/Application',
          key:'application',
          parentId: '/npm',
          children:[
            {
                key: 40010,
                title: '查看',
                parentId: 'application',
            },
            {
                key: 40011,
                title: '编辑',
                parentId: 'application',
            },
          ]
        },
        {
          title: '采集点和标签',
          path: 'tag',
          component: './Npm/Tag',
          key:'tag',
          parentId: '/npm',
          children:[
            {
                key: 40020,
                title: '查看',
                parentId: 'tag',
            },
            {
                key: 40021,
                title: '编辑',
                parentId: 'tag',
            },
          ]
        },
        {
          title: '拓扑',
          path: 'topology',
          component: './Npm/Topology',
          key:'topology',
          parentId: '/npm',
          children:[
            {
                key: 40030,
                title: '查看',
                parentId: 'topology',
            },
            {
                key: 40031,
                title: '编辑',
                parentId: 'topology',
            },
          ]
        },
        {
          title: '性能分析',
          path: 'analyze',
          component: './Npm/Analyze',
          key:'analyze',
          parentId: '/npm',
          children:[
            {
                key: 40040,
                title: '查看',
                parentId: 'analyze',
            },
          ]
        }
      ]
    },
    {
      title: '账户和权限',
      icon:'icon-zhanghuguanli',
      path: '/AccountsPermissions',
      key:'/AccountsPermissions',
      parentId: null,
      children: [
        {
          title: '账户',
          path: 'Ledger',
          component: './AccountsPermissions/Ledger',
          key:'Ledger',
          parentId: '/AccountsPermissions',
          children:[
            {
                key: 50010,
                title: '查看',
                parentId: 'Ledger',
            },
            {
                key: 50011,
                title: '编辑',
                parentId: 'Ledger',
            },
          ]
        },
        {
          title: '权限',
          path: 'Permission',
          component: './AccountsPermissions/Permission',
          key:'Permission',
          parentId: '/AccountsPermissions',
          children:[
            {
                key: 50020,
                title: '查看',
                parentId: 'Permission',
            },
            {
                key: 50021,
                title: '编辑',
                parentId: 'Permission',
            },
          ]
        },
      ]
    }
  ]
  
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
  
 /*  function getChildrenList(data) {
    let tmp = [];
    data.map((value) => {
      const newData = { ...value };
      newData.key = value.key;
      if(value.children&&value.children.length>0){
        newData.children = getChildrenList(value.children);
      }
      //newData.children = value.children ? getChildrenList(value.children) : null;
      tmp.push(newData);
      return false;
    });
    return tmp;
  }
  console.log(getChildrenList([...memu]));
  sessionStorage.setItem('menu',JSON.stringify(getChildrenList([...memu]))) */
  
  let aHorizontalMenu = getAHorizontalMenu([...memu]);
  
  console.log(aHorizontalMenu);
  
  export default {
    memu,
    aHorizontalMenu,
  };
  