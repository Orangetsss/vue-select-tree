<template>
    <el-select
        class="vue-select-tree"
        ref="vue-select-tree"
        popper-class="ss-popper-class"
        v-model.trim="value"
        :placeholder="placeholder"
        :disabled="disabled">
        <el-option value="">
            <el-tree
                node-key='id'
                ref="ss-tree"
                lazy
                :load="getChildrenNode"
                :highlight-current="true"
                :expand-on-click-node="false"
                @node-click="nodeClick"
                :data="treeData"
                :props="defaultProps">
                <!-- node option -->
                <template v-slot="{ node }" style="display: flex;flex-direction: row;justify-content: space-between;width: 100%;">
                    <!-- 机构 -->
                    <div style="width:100%" :class="{'loadSpan': node.data.id === 'custom'}" >
                        {{ node.label }}
                    </div>
                </template>
            </el-tree>
        </el-option>
    </el-select>
</template>

<script>
export default {
    name: 'vueSelectTree',
    props: {
        placeholder: {
            type: String,
            default: '请选择组织机构'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loadMethod: {
            type: String,
            default: 'getChildrenNode'
        }
    },
    data(){
        return{
            treeData: [],
            defaultProps: {
                children: 'zzChildren',
                label: 'name',
                isLeaf: 'leaf'
            },
            value: ''
        }
    },
    methods: {
        async getChildrenNode(node, resolve){
            if (node.level === 0) {
                return resolve([{ name: 'region', leaf: false, children: [{name: 'zoom'}] }]);
            }
            if (node.level > 0) {
                // 获取下级数据
                if(this.$parent[this.loadMethod]){
                    let { data } = await this.$parent[this.loadMethod]();
                    if(data)  return resolve(data)
                }else{
                    throw '引用组件页面未定义getChildrenNode方法'
                }
            }
        },
        // 节点点击
        nodeClick(nodeData, node, vnode) {
            console.log(nodeData.name)
            console.log(node)
            console.log(vnode)
            // this.$set(this.form, 'organizationId', nodeData.name)
            // this.orgId = nodeData.id
            // this.$refs['form'].clearValidate('organizationId')
            // 输入框赋值
            this.value=nodeData.name
            // 隐藏下拉框
            this.$refs['vue-select-tree'].blur()
            // for (let i = 0; i < this.$refs['vue-select-tree'].length; i++) {
            //     this.$refs['vue-select-tree'][i].blur()
            // }
            
        },
    }
}
</script>

<style scoped>
    .vue-select-tree{
        height:100%;
        width:100%;
        line-height: 1;
    }
    .vue-select-tree >>> .el-input, 
    .vue-select-tree >>> .select-trigger,
    .vue-select-tree >>> .el-input__inner,
    .vue-select-tree >>> .el-input__icon{
        height:100%;
        line-height: 1;
    }
    .ss-popper-class .el-select-dropdown__item {
        height: auto;
        line-height: 1;
        padding: 0;
        /* min-height: 140px; */
        background: white;
        max-height: 274px;
        overflow-y: auto;
    }
</style>
