<template>
    <div class="page">
        <div class="page-header">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <router-link to="/"><a-icon type="dashboard" /> 管理控制台</router-link></a-breadcrumb-item>
                <a-breadcrumb-item>项目管理</a-breadcrumb-item>
            </a-breadcrumb>
            <h2>报价管理</h2>
            <a-row :style="{marginTop:'15px'}">
                <a-col :span="12">
                    <router-link :to="{path:'/projects/add_quoted'}">
                        <a-button type="primary" icon="plus">新建</a-button>
                    </router-link>
                </a-col>
                <a-col :span="12">col-12</a-col>
            </a-row>
        </div>
        <div class="page-content">
            <a-list
                    :grid="{ gutter: 16, column: 3 }"
                    :dataSource="quotedList"
                    hoverable
            >
                <a-list-item slot="renderItem" v-for="item in quotedList">
                    <a-card hoverable :bordered="false">
                        <template class="ant-card-actions" slot="actions">
                            <div><a-icon type="export"/> 导出</div>
                            <div><a-icon type="edit"/> 编辑</div>
                            <div><a-icon type="delete" /> 删除</div>
                        </template>
                        <a-card-meta
                                :title="item.title"
                                description="This is the description">
                            <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </a-card-meta>
                    </a-card>
                </a-list-item>
            </a-list>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                quotedList :[
                    {
                        title: 'Title 1',
                    },
                    {
                        title: 'Title 2',
                    },
                    {
                        title: 'Title 3',
                    },
                    {
                        title: 'Title 4',
                    },
                ]
            }
        }
    };
</script>