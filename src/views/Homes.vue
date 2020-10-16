<template>
	<div class="home">
	<navbar></navbar>
	<van-tabs v-model="active"  sticky>
	  <van-tab v-for="(item,index) in category" :title="item.title" 
	  :key="item._id">
	  <van-list
	  	    v-model="item.loading"
	  	    :finished="item.finished"
	  	    finished-text="没有更多了"
	  	    @load="onLoad" 
			:immediate-check="false"
	  	  >

	    <div class="parentItem">
	    <detail v-for="(cateItem,cateIndex) in item.list" :key="cateIndex" 
		:detailItem="cateItem" v-if="active === index" class="detailItem">
		</detail>
		</div>
	 </van-list>
	  </van-tab>
	</van-tabs>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar.vue"
	import Detail from "../components/Detail.vue"
	export default {
		data(){
			return {
				category:[],
				active:0
			}
		},
		components:{
			Navbar,
			Detail
		},
		created() {
			this.selectCategory()
		},
		methods:{
		  async selectCategory(){
				const res = await this.$http.get("/category")
				this.category = res.data
				this.changeCategory(res.data)
			},
			 changeCategory(data){
				const res = data.map((item,index)=>{
					item.list = []
					item.page=1
					item.pagesize=10
					item.finished = false
					item.loading =false
					return item
				})
				this.category = res
				this.selectArtile()
			},
			async selectArtile(){
				const categoryitem = this.categoryitem()
				const res = await this.$http.get("/detail/"+ categoryitem._id,{
				params:{
					page:categoryitem.page,
					pagesize:categoryitem.pagesize
				}
				})
				categoryitem.list.push(...res.data)
				categoryitem.loading = false
				if(res.data.length < categoryitem.pagesize){
					categoryitem.finished = true
				}
			},
			categoryitem(){
				const res = this.category[this.active]
				 return res
			},
			onLoad(){
				const categoryitem = this.categoryitem()
				setTimeout(()=>{
					categoryitem.page +=1
					this.selectArtile()
				},1000)

			}
		},
		watch:{
			active(){
				this.selectArtile()
			}
		}
	}
</script>

<style scoped>
	.home{
		background-color: white;
	}	
	.parentItem{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 10px;
	
	}
	.detailItem{
		width: 48%;
	}
</style>
