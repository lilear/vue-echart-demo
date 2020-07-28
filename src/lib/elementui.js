import { Button, Select, Container, Aside, Menu, Submenu, MenuItemGroup, MenuItem, Main } from 'element-ui';
const element = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Select);
    Vue.use(Container);
    Vue.use(Aside);
    Vue.use(Menu);
    Vue.use(Submenu);
    Vue.use(MenuItemGroup);
    Vue.use(MenuItem);
    Vue.use(Main);
  }
}
export default element;