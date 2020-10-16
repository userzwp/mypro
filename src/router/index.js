import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

 const routes = [
	 {
		path:"",
		 redirect:"/home"
	 },
	{
		path:"/register",
		name:"Register",
		component:() => import("../views/Register")
	},
	{
		path:"/login",
		name:"Login",
		component:() =>import("../views/Login")
	},
	{
		path:"/userinfo",
		name:"Userinfo",
		meta:{
			istoken:true
		},
		component:() => import("../views/Userinfo")
	},
	{
		path:"/edit",
		name:"Edit",
		meta:{
			istoken:true
		},
		component:() => import("../views/Edit")
	},
	{
		path:"/home",
		name:"Home",
		meta:{
			keepalive:true
		},
		component:() => import ("../views/Home")
	},
	{
		path:"/article/:id",
		name:"Article",
		component:() => import ("../views/Article")
	}
 ]


const router = new VueRouter({
	mode:"history",
	routes
})
router.beforeEach((to,from,next) => {
    if(!localStorage.getItem("id") && !localStorage.getItem("token") &&
	to.meta.istoken){
		  router.push("/login")
		  Vue.prototype.$msg.fail("请重新登录")
		   return;
	}
    next()
})

export default router