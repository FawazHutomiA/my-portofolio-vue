<template>
  <div class="mx-auto">
    <me class="mt-20"></me>
    <about class="mt-20"></about>
  </div>
</template>
<script>
import Me from "@/fragments/home/Me.vue";
import About from "@/fragments/home/About.vue";
export default {
  name: "Home",
  components: {
    Me,
    About,
  },
  data() {
    return {};
  },
};
</script>
