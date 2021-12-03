import request from '@/utils/request';

export async function getMenuData() {
  return request('/api/menu/getMenuData'); //mock数据
  //return request('/devApi'); //真实数据
}