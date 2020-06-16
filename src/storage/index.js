// 处理缓存的函数

// import { delete } from "vue/types/umd";

/**
 * 这里使用ES6的规范
 */
const STORAGE_KEY = "mall";
export default {
  // 存储值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getStorage(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      let val = this.getStorage();
      val[key] = value;
      window, sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  /**
   * 获取存储值中的某一项
   * getStorage是一个json对象，而这个对象中有很多项，使用key可以指定某一项
   * key 表示具体某一项
   * module_name 表示在是哪一个模块中的内容 比如user下面的userName
   */
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getStorage(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  // 获取存储值
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
  },
  // 删除存储的数据
  clear(key, module_name){
    let val = this.getStorage();
    if(module_name){
      if(!val[module_name][key]) return;
      delete val[module_name][key];
    }else{
      delete val[key];
    }
    // this.setItem(STORAGE_KEY,val);
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
  }
};
