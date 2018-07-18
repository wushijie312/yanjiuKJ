import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App from '../App'
import Index from '@/components/index'; 
import Page1 from '@/components/page1';
import Page2 from '@/components/page2';
import User from '@/components/user';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      children: [

        { path: 'index', name:'index', component: Index },

        { path: 'page1', name:'page1', component: Page1 },

        { path: 'page2/:id', name:'page2', component: Page2 }
      ]
    },{
    	path: '/user/:id/ss',
      name: 'user',
      component: User
    }
  ]
})
