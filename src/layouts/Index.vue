<template>
  <navbar></navbar>
  <router-view></router-view>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default{
    name: 'DefaultLayout',
    components: {
        Navbar
    }
}
</script>
