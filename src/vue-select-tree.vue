<template>
    <el-select
        v-model.trim="value"
        popper-class="orgTreeSelect"
        :placeholder="placeholder"
        v-if="attr.type.type === 'ORGANIZATION'"
        :disabled="disabled"
        ref="orgSelect">
        <el-option value="">
            <el-tree
                class="filter-tree"
                node-key='id'
                ref="orgTree"
                lazy
                :load="getChildrenNode"
                :highlight-current="true"
                :expand-on-click-node="false"
                @node-click="nodeClick"
                :data="treeData"
                :props="defaultProps">
                <!-- node option -->
                <span slot-scope="{ node }" style="display: flex;flex-direction: row;justify-content: space-between;width: 100%;">
                    <!-- 机构 -->
                    <div style="width:100%" :class="{'loadSpan': node.data.id === 'custom'}" >
                        <!-- <i v-if="node.data.id === 'custom'" class="el-icon-loading" style="margin-right: 5px"></i> -->
                        <!-- <i v-else class="iconfont iconbumen" style="color:#6A6E73"></i> -->
                        {{ node.label }}
                    </div>
                </span>
            </el-tree>
        </el-option>
    </el-select>
</template>

<script>
export default {
    name: 'vueSelectTree',
    data(){
        return{
            treeData: [],
            defaultProps: {
                children: 'zzChildren',
                label: 'name',
                isLeaf: 'leaf'
            },
            value: '',
            disabled:false,
            placeholder:'请选择组织机构'
        }
    },
    methods: {
        getChildrenNode(node, resolve){
            if (node.level > 0) {
                // getChildrenNode(node.data.id).then(response => {
                //     if (response) {
                //         resolve(response.data.data)
                //     }
                // })
            }
        },
        // 节点点击
        nodeClick(nodeData, node, vnode) {
            // this.$set(this.form, 'organizationId', nodeData.name)
            // this.orgId = nodeData.id
            // this.$refs['form'].clearValidate('organizationId')
            // // 隐藏下拉框
            for (let i = 0; i < this.$refs.orgSelect.length; i++) {
                this.$refs.orgSelect[i].blur()
            }
        },
    }
}
</script>

<style scoped>
    .orgTreeSelect .el-select-dropdown__item {
        height: auto;
        padding: 0;
        /* min-height: 140px; */
        background: white;
        max-height: 274px;
        overflow-y: auto;
    }
</style>