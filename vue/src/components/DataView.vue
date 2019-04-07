<template>
    <a-card title="数据概览" :bordered="false">
        <a-card-grid style="width:25%;">
            <div>当前月收支</div>
            <a-row>
                <a-col :span="12">
                    支出
                    <div class="text-lg">12658.00</div>
                </a-col>
                <a-col :span="12">
                    收入
                    <div class="text-lg">62658.00</div>
                </a-col>
            </a-row>
        </a-card-grid>
        <a-card-grid style="width:25%;">
            <div>季度收支</div>
            <a-row>
                <a-col :span="12">
                    支出
                    <div class="text-lg">12658.00</div>
                </a-col>
                <a-col :span="12">
                    收入
                    <div class="text-lg">62658.00</div>
                </a-col>
            </a-row>
        </a-card-grid>
        <a-card-grid style="width:25%;">
            <div>本年收支</div>
            <a-row>
                <a-col :span="12">
                    支出
                    <div class="text-lg text-red">￥12658.00</div>
                </a-col>
                <a-col :span="12">
                    收入
                    <div class="text-lg text-green">￥62658.00</div>
                </a-col>
            </a-row>
        </a-card-grid>
        <a-card-grid style="width:25%;">
            <div>总收支</div>
            <a-row>
                <a-col :span="12">
                    支出
                    <div class="text-lg">12658.00</div>
                </a-col>
                <a-col :span="12">
                    收入
                    <div class="text-lg">62658.00</div>
                </a-col>
            </a-row>
        </a-card-grid>
        <a-card-grid style="width:25%;textAlign:'center'">
            <div>当前月项目</div>
        </a-card-grid>
        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
        <a-card-grid style="width:25%;textAlign:'center'">Content</a-card-grid>
    </a-card>
</template>

<script>
    export default {
        name: "DataView"
    }
</script>

<style scoped>

</style>