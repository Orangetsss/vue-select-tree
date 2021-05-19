# vue-select-tree

>*简介：*
    使用element中的select+tree两个组件，组装成一个下拉树形的组件，做了一个简单的封装

>*组件完整代码：*
    packages/vue-select-tree/vue-select-tree.vue

>*组件引用示例：*
    src/App.vue

>*依赖插件版本：*
    vue3.0 + element-plus

    <!-- 引用方式 -->
    <VueSelectTree
		:placeholder="placeholder"
		:disabled="disabled"
		loadMethod="getChildrenNode"
		style="width:360px;height:32px">
	</VueSelectTree>

|  参数   | 备注   |
|  ----   | ----  |
| placeholder  | 下拉输入框内的提示文字 |
| disabled  | true为禁用状态 |
| loadMethod  | tree组件load触发的函数，在父组件定义后将函数名字传给子组件 |