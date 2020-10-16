<template>
	<div>
	<div class="loginBtn" @click="regiterClick">
		{{btntext}}
	</div>
	</div>
</template>

<script>
	export default{
		props:["btntext"],
		methods:{
			regiterClick(){
				this.$emit("submitClick")
			}
		}
	}
</script>

<style scoped>
	.loginBtn{
		margin-top: 10px;
		height: 45px;
		background-color: #ff9db5;
		color: white;
		text-align: center;
		line-height: 45px;
		font-size: 16px;
		border-radius: 25px;
	}
</style>
