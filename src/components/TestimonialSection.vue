<script setup>
import TestimonialCard from "./TestimonialCard.vue";
import {ref} from "vue";
import testimonialsData from "../data/testimonials.json";


const testimonials = ref(testimonialsData || [])
</script>

<template>
  <section id="testimonial-section"
           class="w-full h-auto lg:h-screen bg-alova px-5 md:px-[40px] lg:px-[98px] xl:px-[109px] py-[26px] lg:py-[98px] flex flex-col gap-16 lg:gap-20 items-center">
    <h1 class="text-murko text-5xl text-center lg:text-7xl font-hore">Cerita dari Teman Teras</h1>
    <div id="testimonial-wrapper" class="w-full h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[2.625rem]">
      <TestimonialCard v-for="item in testimonials" :key="item.id" :item="item"/>
    </div>
  </section>
</template>