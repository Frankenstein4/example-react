/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
 import ProLayout, { DefaultFooter,PageContainer } from '@ant-design/pro-layout';
 import React, { useEffect,useState } from 'react';
 import { Link, useIntl, connect, history } from 'umi';
 import { GithubOutlined } from '@ant-design/icons';
 import { Result, Button } from 'antd';
 import Authorized from '@/utils/Authorized';
 import RightContent from '@/components/GlobalHeader/RightContent';
 import { getAuthorityFromRouter } from '@/utils/utils';
 import logo from '../assets/logo/logo.svg';
 import request from '@/utils/request';
 import defaultProps from './menu';
 import * as allIcons from '@ant-design/icons';
 import './BasicLayout.less';
 import AuthorizedRoute from '@/components/Authorized/AuthorizedRoute';
 const noMatch = (
   <Result
     status={403}
     title="403"
     subTitle="Sorry, you are not authorized to access this page."
     extra={
       <Button type="primary">
         <Link to="/user/login">Go Login</Link>
       </Button>
     }
   />
 );
 
 const MyIcon = (item) => {
    return (
      <span className="anticon font0">
        <span className={`iconfont  ${item.path}`}></span>
      </span>
    );
};
 
 const  fixMenuItemIcon = (menus) => {
   menus.forEach((item) => {
     const { icon, children } = item;
     if (typeof icon === 'string') {
           item.icon = <MyIcon path={typeof item.icon === 'string' ? item.icon : ''} />;
     }
     children && children.length > 0 ? (item.children = fixMenuItemIcon(children)) : null;
   });
   return menus
 };
 
 const  determineRout1 = (menus,path) => {
    let res = false;
   const determineRout = (menus, path) => {
       menus.forEach((item) => {
           const { children } = item;
           if (path == item.path) {
               res = true
           }
           children&&children.length > 0 ? determineRout(children, path) : [];
       });
   };
   determineRout(menus,path);
   res ? console.log(res):history.push('/login');
};
 /**
  * use Authorized check all menu item
  */
  const menuDataRender = menuList =>
  menuList.map(item => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return Authorized.check(item.authority, localItem, null);
  });
 
 const defaultFooterDom = (
   <DefaultFooter
     copyright={`${new Date().getFullYear()} 蚂蚁金服体验技术部出品`}
     links={[
       {
         key: 'Ant Design Pro',
         title: 'Ant Design Pro',
         href: 'https://pro.ant.design',
         blankTarget: true,
       },
       {
         key: 'github',
         title: <GithubOutlined />,
         href: 'https://github.com/ant-design/ant-design-pro',
         blankTarget: true,
       },
       {
         key: 'Ant Design',
         title: 'Ant Design',
         href: 'https://ant.design',
         blankTarget: true,
       },
     ]}
   />
 );
 
 
 
 const BasicLayout = props => {
   const {
     dispatch,
     children,
     settings,
     location = {
       pathname: '/',
     },
     menuData
   } = props;
   console.log(props);
   const [openKey,setOpenKey] = useState(props.location.pathname);
   const [selectedKeys,setSelectedKeys] = useState([]);
   /**
    * constructor
    */
 
   useEffect(() => {
     if (dispatch) {
       dispatch({
         type: 'user/fetchCurrent',
       });
       dispatch({
         type: 'menu/getMenuData',
       });
     }
     const {pathname} = props.location;
     let path = pathname.split('/');
     let c = [];
     for(let i=1;i<=path.length;i++){
         c.push(path.slice(0,i).join("/"))
     }
    setOpenKey(c.filter(v=>{return v.length>0}));
    // if(JSON.parse(sessionStorage.getItem('menu')).length>0){
    //     determineRout1(JSON.parse(sessionStorage.getItem('menu')),props.location.pathname);
    // }
   }, []);
   /**
    * init variables
    */
 
   const handleMenuCollapse = payload => {
     if (dispatch) {
       dispatch({
         type: 'global/changeLayoutCollapsed',
         payload,
       });
     }
   }; // get children authority
 
   const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
     authority: undefined,
   };
   const { formatMessage } = useIntl();
   return (
        <ProLayout
           logo={logo}
           selectedKeys = {[props.location.pathname]}
            openKeys={openKey}
           formatMessage={formatMessage}
           onOpenChange = {(key, domEvent )=>{
                if(key.length>2){
                    setOpenKey(key);
                }else{
                    setOpenKey(false)
                }
           }}
           onCollapse={handleMenuCollapse}
           breakpoint={false}
           onMenuHeaderClick={() => history.push('/')}
           onPageChange={(i,t)=>{
             if(i.pathname=='/Tree/Tree1'){
               sessionStorage.removeItem('item');
             }
           }}
           subMenuItemRender={(item, index, logo) => {//有子，subMenu
             return <div >{item.icon}<span>{item.name}</span></div>
           }}
           menuItemRender={(menuItemProps, defaultDom) => {
             if (menuItemProps.isUrl || !menuItemProps.path) {
               return defaultDom;
             }
             return <Link to={menuItemProps.path}>{defaultDom}</Link>;
           }}
           breadcrumbRender={(routers = []) => [
             {
               path: '/',
               breadcrumbName: formatMessage({
                 id: 'menu.home',
               }),
             },
             ...routers,
           ]}
           itemRender={(route, params, routes, paths) => {
             const first = routes.indexOf(route) === 0;
             return first ? (
               <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
             ) : (
               <span>{route.breadcrumbName}</span>
             );
           }}
           footerRender={() => defaultFooterDom}
           /* menuDataRender={menuDataRender} */   /* 这种是静态路由 */
           menuDataRender={ () => fixMenuItemIcon(menuData) }  
           /* menuDataRender={ () => menuData }   */
           rightContentRender={() => <RightContent />}
           {...props}
           {...settings}
         >
           <Authorized authority={authorized.authority} noMatch={noMatch}>
             {children}
           </Authorized>
         </ProLayout>
   );
 };
 
 export default connect(({ global, settings,menu }) => ({
   collapsed: global.collapsed,
   settings,
   menuData:menu.menuData,
 }))(BasicLayout);
 