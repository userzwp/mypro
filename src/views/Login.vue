<template>
	<div class="register">
		<login-top loginTop="登录bilibili">
			<div slot="right" @click="$router.push('/register')">Register</div>
		</login-top>
		<login-text type="text" placeholder="请输入账号"
		 label="账号" rule="^.{6,16}$" @inputChange="successUser"></login-text>
		<login-text type="password" placeholder="请输入密码"
		 label="密码" rule="^.{6,16}$" @inputChange="successPass"></login-text>
		 <login-btn btntext="登录" @submitClick="submitClick"></login-btn>
	</div>
</template>

<script>
	import LoginTop from "../components/LoginTop.vue"
	import LoginText from "../components/LoginText.vue"
	import LoginBtn from "../components/LoginBtn.vue"
	export default {
		data(){
			return {
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
	
			successUser(content){
				this.username = content
			},
			successPass(content){
				this.password = content
			},
			async submitClick(){
				if(this.password && this.username){
				var res = await	this.$http.post("/login",{	
						username:this.username,
						password:this.password
					})
					this.$msg.fail(res.data.msg)
					if(res.data.code===301 || res.data.code===302){
						return
					}
					localStorage.setItem("token",res.data.token)
					localStorage.setItem("id",res.data.id)
					setTimeout(()=>{
						this.$router.push("/userinfo")
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