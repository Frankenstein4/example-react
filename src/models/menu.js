import { getMenuData } from '@/services/menu'; // 通过后台返回特定的数组json或者mock模拟数据
const MenuModel = {
    namespace: 'menu',
    state: {
        menuData: []
    },
    effects: {
        *getMenuData(_, { call, put }) {
            const response = yield call(getMenuData);
            yield put({
              type: 'save',
              payload: response,
            });
          },
    },
    reducers: {
        save(state, action) {
            return { ...state, menuData: action.payload || [] };
        },
    }
};
export default MenuModel;