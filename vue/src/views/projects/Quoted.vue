<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Quoted",
        data() {
            return {
                form: this.$form.createForm(this),
                dateFormat: 'YYYY-MM-DD',
            };
        },
        methods:{
            setDate(date) {
            },
            pmSet(){

            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        }
    }
</script>

<style scoped>

</style>