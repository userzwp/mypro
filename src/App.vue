<template>
  <div id="app">
	<keep-alive include="Home">
	<router-view v-if="$route.meta.keepalive"></router-view>
	</keep-alive>
	<router-view v-if="!$route.meta.keepalive"></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
	body{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background-color: #f4f4f4;
	}

</style>
