<template>
  <div
    class="bg-white p-2 border shadow-md h-full py-6 flex flex-col justify-center items-center gap-y-4"
    :class="{ 'rounded-l-xl': id == 1, 'rounded-r-xl': id == 3 }"
  >
    <div class="flex flex-col items-center gap-y-4">
      <img :src="icon" alt="" class="w-16" />
      <h3 class="text-xl font-semibold">{{ title }}</h3>
    </div>
    <div class="text-center flex-grow flex flex-col gap-y-6">
      <p>{{ desc }}</p>
      <div class="flex flex-col gap-y-1">
        <h4 v-if="id != 3" class="text-lg text-violet-500 font-semibold">
          Languages I speak:
        </h4>
        <h4 v-else class="text-lg text-violet-500 font-semibold">
          Things I enjoy designing:
        </h4>
        <p>{{ skilss }}</p>
      </div>
      <div class="flex flex-col gap-y-1">
        <h4 v-if="id != 3" class="text-lg text-violet-500 font-semibold">
          Dev Tools:
        </h4>
        <h4 v-else class="text-lg text-violet-500 font-semibold">
          Design Tools:
        </h4>
        <div v-for="(item, index) in tools" :key="index">
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Skills",
  props: {
    id: {
      type: Number,
      required: true,
      default() {
        return 0;
      },
    },
    icon: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    title: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    desc: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    skilss: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
    tools: {
      type: String,
      required: true,
      default() {
        return "";
      },
    },
  },
};
</script>
