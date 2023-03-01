<template>
  <div
    class="flex flex-col items-center gap-y-6 pt-12 bg-violet-500 h-[36rem] mb-96"
  >
    <div class="flex flex-col items-center gap-y-6">
      <h1 class="text-4xl text-white font-semibold">
        Hi, I’m Fawaz. Nice to meet you.
      </h1>
      <p class="text-center text-white text-lg px-72 font-medium">
        I am a Bachelor's graduate from Sunan Gunung Djati State Islamic
        University, Bandung, majoring in Informatics Engineering. The year I
        entered college was 2016 and thank God I managed to graduate on time,
        out of 170 students in a class only 9 graduated on time and one of them
        was me. Graduated in 2020 with a 3.44 GPA.
      </p>
      <p class="text-center text-white text-lg px-72 font-medium">
        I am a frontend developer who is familiar with frontend technologies. I
        have handled 3 more projects and the most memorable project is the
        mydigilearn telkom project.
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
          tools: ["MySQL", "PostgreSQL", "MongoDB", "DBeaver"],
        },
        {
          id: 3,
          title: "UI/UX Designer",
          img: "/design.png",
          desc: "I value simple content structure, clean design patterns, and thoughtful interactions.",
          languages: "Figma",
          tools: ["Figma"],
        },
      ],
    };
  },
};
</script>
