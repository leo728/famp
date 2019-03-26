<template>
    <div class="add-projects-modal">
        <a-button type="primary" @click="showModal" icon="plus">新建项目</a-button>
        <a-modal
                title="Basic Modal"
                v-model="visible"
                @ok="handleOk"
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-modal>
    </div>
</template>

<script>
    export default {
        name: "AddProjects",
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            showModal() {
                this.visible = true
            },
            handleOk(e) {
                console.log(e);
                this.visible = false
            },
        }
    }
</script>

<style scoped>

</style>