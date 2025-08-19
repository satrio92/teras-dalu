<script setup>
const props = defineProps(['item'])
</script>

<template>
  <div
    id="testimonial-card"
    class="w-full h-[300px] lg:h-full rounded-[1.25rem] border-2 border-drakar relative overflow-hidden cursor-default bg-cover bg-center"
    :style="{ backgroundImage: `url(/images/testimonials/${props.item.name.toLowerCase().replace(/\s+/g, '-')}.png)` }">
    <div
      class="w-full h-full bg-[linear-gradient(180deg,rgba(64,28,16,0)_50.18%,#401C10_94.14%)] hover:bg-drakar absolute top-0 left-0 pb-[2.625rem] flex flex-col group transition-all duration-700 ease-in">
      <div
        class="flex w-full h-full items-center px-[1.6875rem] -ml-[100%] group-hover:ml-0 transition-all duration-500 ease-in">
        <p class="text-alova text-[1.25rem] font-mulish font-semibold">
          {{ props.item.testimoni }}
        </p>
      </div>
      <div class="w-full ml-10">
        <h4 class="text-alova text-[2.5rem] font-hore -mb-2">{{ props.item.name }}</h4>
        <h5 class="text-alova text-xl font-hore">{{ props.item.profession }}</h5>
      </div>
    </div>
  </div>
</template>