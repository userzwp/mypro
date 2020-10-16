<template>
	<div>
		<navbar></navbar>
		<div class="detaiInfo" v-if="model">
			<div class="video">
			<video :src="model.content" controls="controls"></video>
			</div>
			<div class="wraptext">
				<div class="text">
					<span>{{model.titles}}</span>
					<span>{{model.name}}</span>
				</div>
				<div class="user">
					<span>{{model.names}}</span>
					<span>161.4万次观看</span>
					<span>518弹幕</span>
					<span>{{model.date}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar.vue"
	export default{
		name:"Article",
		data(){
			return {
				model:{},
				titles:""
			}
		},
		components:{
			Navbar
		},
		created() {
			this.articleData()
		},
		methods:{
		  async	articleData(){
			  console.log(this.$route)
			const res =	await this.$http.get("article/"+this.$route.params.id) 
			  console.log(res.data[0])
			  this.model = res.data[0]
			  this.model.titles = res.data[0].category.title
			  this.model.names = res.data[0].userinfo.name
			}
		}
	}
</script>

<style scoped>
.detaiInfo .video{
	width: 100%;
}
.video video{
	width: 100%;
}
.detaiInfo .wraptext{
	padding:5px 10px;
}
.wraptext .text span:nth-child(1){
	padding: 0 10px;
	color: #fb7299;
	background-color: #f4f4f4;
	border-radius: 10px;
}
.wraptext .user{
	padding: 5px 10px;
}
.wraptext .user span{
	color: #aaa;
	font-size: 16px;
	margin: 0 5px;
}
.wraptext .user span:nth-child(1){
	color: black;
	padding-right: 10px;
}
</style>
