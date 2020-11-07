import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import ListUsers from "../components/ListUsers";
import NewArticle from "../components/NewArticle";
import Login from "../components/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',redirect:'/index'
    },
    {
      path:'/index',component:Index
    },
    {
      path:'/users',component: ListUsers
    },
    {
      path:'/newArticle',component:NewArticle
    },
    {
      path:"/login",component:Login
    }
  ]
})
