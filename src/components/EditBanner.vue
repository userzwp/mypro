<template> 
     <div class="editbanner" @click="bannerClick">
		   <span>{{left}}</span>
		   <slot name="right"></slot>
	 </div>
</template>

<script>
	export default{
		props:["left"],
		methods:{
			bannerClick(){
				this.$emit("bannerClick")
			}
		}
	}
</script>

<style scoped>
	.editbanner{
		background-color: white;
		border-bottom: 3px solid #fafafa;
		display: flex;
		justify-content: space-between;
		padding: 10px;
		align-items: center;
	}
</style>
