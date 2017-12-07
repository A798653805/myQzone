<template>

</template>

<style lang="less">
    @import url('./less/topheader.less');
</style>

<script>
export default {
    data() {
        return {
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
