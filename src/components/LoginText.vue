<template>

	<div class="loginText">
		<input v-model="content" :type="type"
		 :placeholder="placeholder" :rule="rule">
		 <label>{{label}}</label>
	</div>

</template>

<script>
	export default{
		data(){
			return {
				content:""
			}
		},
		props:["label","type","placeholder","rule"],
		methods:{
			handleUrl(){
				const rue = new RegExp(this.rule)
				if(rue.test(this.content)){
					this.$emit("inputChange",this.content)
				}
			}
		},
		watch:{
			content(){
			   this.handleUrl()
			}
		}
	}
</script>

<style >
	.loginText{
		margin-top: 10px;
		position: relative;
	}
	.loginText input {
		
		height: 45px;
		background: white;
		border: none;
		outline: none;
		padding-left: 100px;
	   font-size: 18px;
	}
	
	.loginText label{
		position: absolute;
		top: 50%;
		left: 15px;
		margin-top: -2px;
		transform: translateY(-50%);
		font-size: 18px;
	}
	
</style>
