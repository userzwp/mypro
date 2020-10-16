<template>
	<div class="userdetail">
		<div class="user_center">
		<div class="user_img">
			<img :src="userinfo.user_img" />
		</div>
		<div class="user_detail">
			<div class="detail">
				<p>
				<span>0</span>
				<span>粉丝</span>
				</p>
				<p>
				<span>54</span>
				<span>关注</span>
				</p>
				<p>
				<span>0</span>
				<span>获赞</span>
				</p>
			</div>
			<div class="info">
				<div @click="$router.push('/edit')">编辑资料</div>
			</div>
		</div>
		</div>
		<div>
			<h2>{{userinfo.name}}</h2>
			<p v-if="userinfo.user_desc">{{userinfo.user_desc}}</p>
			<div v-else>这个人很浪</div>
		</div>
		<div class="qiehuan">
			<span>动态</span>
			<span>视频</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			userinfo:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		created() {
			console.log(this.userinfo)
		}
	}
</script>

<style scoped>
	.userdetail{
		background-color: white;
	}
	.userdetail .user_center{
		padding: 0 12px;
		display: flex;
	}
	.userdetail .user_img{
		width: 85px;
		height: 85px;
		margin-right: 20px;
	}
	.user_detail{
		display: flex;
		flex-direction: column;
	}
	.user_detail .info{
        margin-top: -10px;
		border: 1px solid #fb7a9f;
		padding: 3px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FB7A9F;
	}
	.user_detail .detail{
		display: flex;
	}
	.user_center .user_img{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.user_detail .detail p{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 3px 15px;
		font-size: 14px;
		position: relative;
	}
	.user_detail .detail p:nth-child(n+2)::before{
		content: "";
		width: 2px;
		height: 18px;
		left: 0;
		background-color: #ccc;
		position: absolute;
	}
	.qiehuan{
		border-top: 1px solid #ccc;
			margin-top:20px ;
	}
	.qiehuan span{
		padding: 5px;
		font-size: 16px;
	    text-align: center;
		line-height: center;
	}
</style>
