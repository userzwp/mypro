<template>
	<div class="register">
		<login-top loginTop="注册bilibili">
			<div slot="right" @click="$router.push('/login')">Login</div>
		</login-top>
		<login-text type="text" placeholder="请输入名字" 
		label="姓名" rule="^.{6,16}$" @inputChange="successInp"></login-text>
		<login-text type="text" placeholder="请输入账号"
		 label="账号" rule="^.{6,16}$" @inputChange="successUser"></login-text>
		<login-text type="password" placeholder="请输入密码"
		 label="密码" rule="^.{6,16}$" @inputChange="successPass"></login-text>
		 <login-btn btntext="注册" @submitClick="submitClick"></login-btn>
	</div>
</template>

<script>
	import LoginTop from "../components/LoginTop.vue"
	import LoginText from "../components/LoginText.vue"
	import LoginBtn from "../components/LoginBtn.vue"
	export default {
		data(){
			return {
				name:"",
				username:"",
				password:""
			}
		},
		components:{
			LoginTop,
			LoginText,
			LoginBtn
		},
		methods:{
			successInp(content){
				this.name = content
			},
			successUser(content){
				this.username = content
			},
			successPass(content){
				this.password = content
			},
			async submitClick(){
				if(this.name && this.password && this.name){
				var res = await	this.$http.post("/register",{
						name:this.name,
						username:this.username,
						password:this.password
					})
					this.$msg.fail(res.data.msg)
					// localStorage.setItem("id",res.data.id)
					// localStorage.setItem("token",res.data.objtoken)
					console.log(res)
					setTimeout(()=>{
						this.$router.push("/login")
					})
				}else{
					this.$msg.fail("格式不正确，请重新输入")
				}
			}
		}
	}
</script>

<style>
</style>
