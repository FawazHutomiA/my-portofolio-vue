<template>
  <div
    class="flex flex-col items-center gap-y-6 pt-12 bg-violet-500 h-[30rem] mb-96"
  >
    <div class="flex flex-col items-center gap-y-6">
      <h1 class="text-4xl text-white font-semibold">
        Hi, I’m Fawaz. Nice to meet you.
      </h1>
      <p class="text-center text-white text-lg px-72 font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
        libero ex hic nam possimus officia id dolor ad ullam ipsa quasi
        dignissimos, corporis nesciunt vero suscipit, animi itaque nemo.
        Consequuntur consectetur, iste optio incidunt ducimus dolorem soluta
        reprehenderit enim provident tempore debitis eveniet voluptatibus
        tenetur. Ut voluptates exercitationem ex architecto.
      </p>
    </div>
    <div class="grid grid-cols-3 mt-20 mx-20">
      <div v-for="(item, index) in data" :key="index.id">
        <skills
          :title="item.title"
          :icon="item.img"
          :desc="item.desc"
          :skilss="item.languages"
          :tools="item.tools"
          :id="item.id"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Skills from "@/components/card/Skills.vue";
export default {
  name: "About",
  components: {
    Skills,
  },
  data() {
    return {
      data: [
        {
          id: 1,
          title: "Frontend Developer",
          img: "/front-end.png",
          desc: "I value simple content structure, clean design patterns, and thoughtful interactions.",
          languages: "HTML, CSS, Javascript, Git",
          tools: ["VueJS", "ReactJS", "NextJS", "NuxtJS"],
        },
        {
          id: 2,
          title: "Backend Developer",
          img: "/back-end.png",
          desc: "I value simple content structure, clean design patterns, and thoughtful interactions.",
          languages: "PHP, Laravel, NodeJS, ExpressJS, Golang",
          tools: ["MySQL", "PostgreSQL", "MongoDB"],
        },
        {
          id: 3,
          title: "UI/UX Designer",
          img: "/design.png",
          desc: "I value simple content structure, clean design patterns, and thoughtful interactions.",
          languages: "Figma, Adobe Photoshop, Adobe Illustrator",
          tools: ["Adobe After Effects", "Adobe Premiere Pro"],
        },
      ],
    };
  },
};
</script>
