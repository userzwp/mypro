import axios from "axios"
import router from "../router/index.js"
import Vue from "vue"
const http = axios.create({
	baseURL:"http://112.74.99.5:3000/web/api"
})

http.interceptors.request.use((config)=>{

	if(localStorage.getItem("id") && localStorage.getItem("token")){
		config.headers.Authorization = "Bearer " + localStorage.getItem("token")
	}
	return config;
},(error)=>{
	return Promise.reject(error)
});

http.interceptors.response.use((response)=>{
	return response;
},(error)=>{
	console.dir(error)
	if(error.response.status===401 || error.response.status===500){
		router.push("/login")
		Vue.prototype.$msg.fail("请先登录")
	}
	return Promise.reject(error);
})


export default http