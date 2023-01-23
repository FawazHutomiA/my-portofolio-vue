<template>
    <div class="bg">
        <h1>{{ message }}</h1>
        <h3>{{ me }}</h3>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            me: 'انا فواز حتومي عبد الرحمن'
        }
    },
    computed: {
        message() {
            return this.$store.root.message
        }
    }
}
</script>
<style scoped>
.bg{
    background-color: #f5f5f5;
    width: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>