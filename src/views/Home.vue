<template>
	<div class="home">
		<navbar></navbar>
      <van-tabs v-model="active" sticky swipeable>
	  <van-tab v-for="(item,index) in category" :title="item.title" 
	  :key="item._id">
	  
	  <van-list
	    v-model="item.loading"
	    :finished="item.finished"
	    finished-text="没有更多了"
	    @load="onLoad"
		:immediate-check="false"
	  >
	  <div class="detailparent">
	    <detail v-for="(cateitem,cateindex) in item.list" v-if="active===index"
		:key ="cateitem._id" :cateitem="cateitem" class="detailItem" 
		@click.native="changeCate(cateitem)"></detail>
		</div>
	  </van-list>
	  </van-tab>
	</van-tabs>
	</div>
</template>

<script>
	import Navbar from "../components/Navbar.vue"
	import Detail from "../components/Detail.vue"
	export default{
		name:"Home",
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
		created(){
			this.selectCategory()
		    console.log(this.$route)
		},
		mounted() {
			
		},
		methods:{
			async selectCategory(){
				const res = await this.$http.get("category")
				this.changeCategory(res.data)
			
			},
			changeCategory(data){
				const cate = data.map((item,index) => {
					item.list = [],
					item.finished = false,
					item.loading = false,
					item.page = 0,
					item.pagesize = 12
					return item
				})
				
				this.category = cate
				this.selectArticle()
			},
		    async selectArticle(){
				const categoryItem = this.categoryItem()
				const res = await this.$http.get("/detail/"+ categoryItem._id,{
					params:{
					  page:categoryItem.page,
					  pagesize:categoryItem.pagesize
					}
				})
				categoryItem.list.push(... res.data.slice(2,100))
				categoryItem.loading = false
				if(res.data.length < 10){
					categoryItem.finished = true
				}
			},
			categoryItem(){
			  const	title = this.category[this.active]
			  return title
			},
			onLoad(){
				const categoryItem = this.categoryItem()
				categoryItem.page +=1
				this.selectArticle()
			},
			changeCate(data){
			
			}
		},
		watch:{
			active:{
				// immediate:true,
				handler(newValue){
					this.selectArticle()
				}
			}
		},
		computed:{
			
		}
	}
</script>

<style scoped>
	.home{
		background-color: white;
	}
	.detailparent{
		margin-top: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.detailItem{
		margin: 5px 0;
		width: 48%;
	}
</style>
