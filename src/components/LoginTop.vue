<template>
	<div class="login">
	<div class="loginTop">
	 <div></div>
	 <div>{{loginTop}}</div>
	 <div>
		 <slot name="right"></slot>
	 </div>
	</div>
	</div>
</template>

<script>
	export default {
		props:{
			loginTop:{
				type:String,
				default(){
					return ""
				}
			}
		}
	}
</script>

<style scoped>
	.loginTop{
		height: 45px;
		display: flex;
		background-color: white;
	}
	.loginTop div{
		flex: 1;
        text-align: center;
		line-height: 45px;
		font-size: 16px;
	}
</style>
