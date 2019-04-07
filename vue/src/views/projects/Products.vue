<template>
    <div class="page">
        <div class="page-header">
            <a-breadcrumb>
                <a-breadcrumb-item>
                    <router-link to="/"><a-icon type="dashboard" /> 管理控制台</router-link></a-breadcrumb-item>
                <a-breadcrumb-item>项目管理</a-breadcrumb-item>
            </a-breadcrumb>
            <h2>产品报价</h2>
        </div>
        <div class="page-content">
            <a-list :grid="{ gutter: 16, column: 6 }" :dataSource="products">
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-card hoverable>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover"/>
                        <template class="ant-card-actions" slot="actions">
                            <a-icon type="edit" />
                            <a-icon type="delete" />
                        </template>
                        <a-card-meta>
                            <div slot="title">{{item.title}}</div>
                            <div slot="description">
                                <div> 售价：<b class="text-red">￥{{item.out_price}}</b> 元/{{item.unit}}</div>
                                <div> 进价：￥{{item.in_price}} 元/{{item.unit}}</div>
                                <div> 供货商：{{item.supplier}}</div>
                            </div>
                        </a-card-meta>
                    </a-card>
                </a-list-item>
            </a-list>
            <div style="text-align: center; padding: 20px 40%;">
                <a-button block>加载更多</a-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                products:[],
                page:1
            }
        },
        created(){
           this.getPage();
        },
        methods:{
            getPage(){
                this.$axios.get('get_products_page.html?page='+this.page).then((res)=>{
                    this.products = res.data.data.data
                })
            }
        }
    };
</script>