<template>
    <div class="container">sidebar</div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'hello'
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 300px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: red;
}
</style>