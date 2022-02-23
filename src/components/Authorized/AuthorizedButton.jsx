import React from 'react';
import { Alert,message } from 'antd';
import check from '@/components/Authorized/CheckPermissions';

const Authorized = ({
  //有权限时返回的内容
  children,
  //需要的权限
  authority,
  //没权限时返回的内容
  noMatch ,
}) => {
  //childrenRender指代之后引用AuthorizedButton所包围的内容
  const childrenRender = typeof children === 'undefined' ? null : children;
  //开始检查权限
  const dom = check(authority, childrenRender, noMatch);
  return <>{dom}</>;
};

export default Authorized;
