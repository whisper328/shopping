import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
import Index from "./pages/index";
import Product from "./pages/product";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Order from "./pages/order";
import OrderConfirm from "./pages/orderConfirm";
import OrderList from "./pages/orderList";
import OrderPay from "./pages/orderPay";

// Vue.use() 加载插件的vue固定语法
Vue.use(Router);

export default new Router({
  routes: [
    {
      // /为父路由 所有的页面都会就在他,然后home组件中页面的格式,每一个页面都可以使用
      path: "/",
      name: "home",
      component: Home,
      redirect:'/index',
      children: [
        {
          path: "/index",
          name: "index",
          component: Index,
        },
        {
          path: "/product/:id",
          name: "product",
          component: Product,
        },
        {
          path: "/detail",
          name: "detail",
          component: Detail,
        },
      ],
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children:[
          {
            path: "/list",
            name: "order-list",
            component: OrderList,
          },
          {
            path: "/confirm",
            name: "order-Comfirm",
            component: OrderConfirm,
          },
          {
            path: "/pay",
            name: "order-pay",
            component: OrderPay,
          }
      ]
    },
  ],
});
