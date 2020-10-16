<template>
	<div class="userinfo">
     <div class="left">1</div>
	 <div class="center">
		<span><van-icon name="search" /></span>
		 <p></p>
	 </div>
	 <div class="right">
		 <div class="image"></div>
		 <p>下载App</p>
	 </div>
	</div>
</template>

<script>
</script>

<style scoped>
	.userinfo{
		display: flex;
		height: 45px;
		background-color: white;
		align-items: center;
	}
	.userinfo .left,
	.userinfo .right,
	.userinfo .center{
		text-align: center;
	}
	.userinfo .left{
		width: 80px;
	}
	.userinfo .center{
		flex: 1;
		position: relative;
	}
	.userinfo .center p{
		background-color: #f4f4f4;
		width: 125px;
		height: 25px;
		border-radius: 10px;
	
	}
	.userinfo .center span{
		position: absolute;
		left: 3px;
		top: 50%;
		transform: translateY(-50%);
	}
	.userinfo .right{
		display: flex;
		margin: 0 5px;
		align-items: center;
	}
	.userinfo .right p{
		padding: 5px 10px;
		background-color: #fb7299;
		color: white;
		font-size: 13px;
	}
	.userinfo .right .image{
		width: 24px;
		height: 24px;
		background-color: aqua;
		margin-right: 5px;
	}
	
</style>
