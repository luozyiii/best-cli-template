import { createContext, useContext } from 'react';
import demoStore from './demo'; // 开发完成需删除

const store: any = {
  demoStore, // 开发完成需删除
};

export const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);
export default store;
