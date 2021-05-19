import VueSelectTree from './vue-select-tree'

const components = [
  VueSelectTree
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  VueSelectTree
}