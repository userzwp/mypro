<template>
	<div class="editviews">
		<navbar></navbar>
		<div class="uploaderfile">
		<van-uploader class="uploaderimg" preview-size="100vw" 
		:after-read="afterRead"/>
		<edit-banner class="edit-top" left="头像">
			<img :src="model.user_img" slot="right" />
		</edit-banner>
		</div>
		<edit-banner left="昵称" @bannerClick="show = true">
			<a href="javascript:;" slot="right">{{model.name}}</a>
		</edit-banner>
		<edit-banner left="账号">
			<a href="javascript:;" slot="right">{{model.username}}</a>
		</edit-banner>
		<edit-banner left="性别" @bannerClick="grendshow = true">
			<span slot="right">{{model.gender===1?"女":"男"}}</span>
		</edit-banner>
		<edit-banner left="签名" @bannerClick="showone = true">
			<span slot="right">{{model.user_desc}}</span>
		</edit-banner>
		
		<van-dialog v-model="show" title="昵称" @cancel="text=''"
		 show-cancel-button  @confirm="confirm">
		<van-field v-model="text" autofocus />
		</van-dialog>
		
		<van-dialog v-model="showone" title="个性签名" @cancel="text=''"
		 show-cancel-button  @confirm="textareaconfirm">
		<van-field v-model="text" autofocus  type="textarea" />
		</van-dialog>
		
		<van-action-sheet v-model="grendshow" :actions="actions" 
		@select="onselect"  cancel-text="取消"/>
		
		<div class="editback" @click="$router.back()">返回个人中心</div>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar.vue"
	import EditBanner from "../components/EditBanner.vue"
	export default {
		data(){
			return{
				model:{},
				show:false,
				text:"",
				showone:false,
				grendshow:false,
				actions:[
					{name:"男",value:0},
					{name:" 女",value:1}
				]
			}
		},
		components:{
			Navbar,
			EditBanner
		},
		created() {
			this.selectUser()
		},
		methods:{
		   async selectUser(){
				const res = await this.$http.get("/user/" + localStorage.getItem('id'))
				this.model =res.data[0]
			},
		   async afterRead(file){
				const formdata = new FormData()
				console.log(formdata)
				formdata.append("file",file.file)
				const res = await this.$http.post("/upload",formdata)
				console.log(res)
				this.model.user_img = res.data.url
				this.userUpdate()
			},
			async userUpdate(){
				const res = await this.$http.post("/update/"+localStorage.getItem("id"),
				this.model)
				if(res.data.code===200){
					this.$msg.fail("修改成功")
				}
			},
			confirm(){
				this.model.name = this.text;
				this.userUpdate();
				this.text="";
				Toast.fail("我的")
			},
			textareaconfirm(){
				this.model.user_desc = this.text;
				this.userUpdate();
				this.text="";
			},
			onselect(data){
				console.log(data)
				this.model.gender = data.value;
				this.userUpdate();
				this.grendshow = false;
				this.$msg.fail("修改成功")
				console.log(this.model)
			}
		}
	}
</script>

<style scoped>

	.uploaderfile{
		
		position: relative;
	}
	.uploaderfile img{
		width: 30px;
		height: 30px;
	}
	.uploaderfile .uploaderimg{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		overflow: hidden;
		opacity: 0;
	}
	.edit-top{
		margin-top: 10px;
		padding: 15px 10px;
	}
		
	.editviews a{
		color: #333;
	}
	.editback{
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #999;
		font-size: 16px;
		margin-top: 20px;
		padding: 15px 0;
	}

</style>
