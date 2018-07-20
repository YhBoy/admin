<template>
	<div>
			
		<router-view></router-view>

	</div>
</template>

<script>
	import HomeForm from './form/form'
	import HomeEdit from './edit/edit'
	export default{
		name: "HomeExplame",
		components: {
			HomeForm,
			HomeEdit
		}
	}
</script>

<style lang="less" scoped>
	
</style>









