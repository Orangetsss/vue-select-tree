import vueSelectTree from './vue-select-tree.vue'

vueSelectTree.install = function(Vue) {
  Vue.component(vueSelectTree.name, vueSelectTree)
}

export default vueSelectTree