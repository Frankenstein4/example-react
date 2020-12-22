import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Tag, Space } from 'antd';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import request from 'umi-request';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 72,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    width: 200,
    hideInSearch: true,
  },
  {
    title: (_, type) => (type === 'table' ? '状态' : '列表状态'),
    dataIndex: 'state',
    initialValue: 'all',
    filters: true,
    valueEnum: {
      all: {
        text: '全部',
        status: 'Default',
      },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
      },
    },
  },
  {
    title: '排序方式',
    key: 'direction',
    hideInTable: true,
    dataIndex: 'direction',
    filters: true,
    valueEnum: {
      asc: '正序',
      desc: '倒序',
    },
  },
  {
    title: '标签',
    dataIndex: 'labels',
    width: 120,
    render: (_, row) => (
      <Space>
        {row.labels.map(({ name, id, color }) => (
          <Tag color={color} key={id}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'dateTime',
  },
  {
    title: 'option',
    valueType: 'option',
    dataIndex: 'id',
    render: (text, row) => [
      <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="id">
        查看
      </a>,
      <TableDropdown
        key="id"
        onSelect={key => window.alert(key)}
        menus={[
          {
            key: 'copy',
            name: '复制',
          },
          {
            key: 'delete',
            name: '删除',
          },
        ]}
      />,
    ],
  },
];
export default () => (
  <ProTable
    key="id"
    columns={columns}
    request={async (params = {}) =>
      request('https://proapi.azurewebsites.net/github/issues', {
        params,
      })
    }
    rowKey="id"
    dateFormatter="string"
    headerTitle="查询 Table"
    toolBarRender={() => [
      <Button key="3" type="primary">
        <PlusOutlined />
        新建
      </Button>,
    ]}
  />
);
