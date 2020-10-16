<template>
	<div @click="$router.push(`/article/${cateitem.id}`)">
		<div class="detaiImg">
			<img :src="cateitem.img" />
			<p>{{cateitem.name}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
		 cateitem:{
			 type:Object,
			 default(){
				 return {}
			 }
		 }
		}	
	}
</script>

<style scoped>
	.detaiImg img{
		width: 100%;
	}
	.detaiImg p{
		margin: 0;
		font-size: 16px;
	/*    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap; */
		display: -webkit-box;
        -webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		
	}
</style>
