<template>
	<div class="userinfos">
     <navbar></navbar>
	 <user-detail class="userdetail" :userinfo="model"></user-detail>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar.vue"
	import UserDetail from "../components/UserDetail.vue"
	export default {
		data(){
			return{
				model:{}
			}
		},
		components:{
			Navbar,
			UserDetail
		},
		created() {
			this.userInfoData()
		},
		methods:{
		    async userInfoData(){
			const res =	await this.$http.get("/user/" + localStorage.getItem("id"),{
				headers:{
					"Authorization":"Bearer " + localStorage.getItem("token")
				}
			})
			  this.model = res.data[0]
			}
		}
	}
</script>

<style scoped>
	.userdetail{
		margin-top: 50px;
	}
	
</style>
