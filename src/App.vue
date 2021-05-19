<template>
	<VueSelectTree
		:placeholder="placeholder"
		:disabled="disabled"
		loadMethod="getChildrenNode"
		style="width:360px;height:32px">
	</VueSelectTree>
</template>

<script>
import VueSelectTree from '../packages/vue-select-tree/vue-select-tree.vue'

export default {
	name: 'App',
	data(){
		return{
			// 提示文字
			placeholder: '请选择机构',
			// 禁用
			disabled: false
		}
	},
	methods: {
		// load获取数据 
		getChildrenNode(){
			return new Promise((resolve) => {
				const data = [{
							name: 'leaf',
							leaf: true
						}, {
							name: 'zone',
							leaf: false
						}];
				setTimeout(() =>{
				resolve({ data})
				
				},1000)
			})
		}
	},
	components: {
		VueSelectTree
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
