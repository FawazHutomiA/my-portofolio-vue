<template>
  <component :is="layout">
    <router-view :key="$route.fullPath" />
  </component>
</template>
<script>
import layout from '@/layouts/Index.vue'
export default{
  name: 'App',
  computed: {
    layout() {
      return layout
    }
  }
}
</script>