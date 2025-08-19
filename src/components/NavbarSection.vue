<script setup>
import {ref} from "vue";

const toggleActive = ref(false);

const scrollTo = (sectionId) => {
  const target = document.getElementById(sectionId)
  target?.scrollIntoView({behavior: 'smooth'})
}
</script>

<template>
  <nav id="navbar-section"
       class="w-full h-[64px] md:h-auto bg-murko rounded-2xl flex items-center justify-between px-[clamp(1.25rem,_2vw,_2rem)] col-span-2 lg:col-span-3">
    <div id="logo" class="cursor-pointer" @click="scrollTo('header-section')">
      <img alt="Teras Dalu Logo" class="size-20" src="/images/logo.svg">
    </div>
    <ul id="menu"
        :class="[toggleActive ? 'left-0 lg:left-auto' : 'left-[100vw] lg:left-auto']"
        class="lg:flex lg:flex-1 lg:w-auto lg:h-auto lg:bg-transparent lg:p-0 lg:flex-row lg:relative lg:text-alova lg:items-center lg:justify-center lg:gap-8 xl:gap-11 lg:text-2xl font-hore lg:transition-none transition-all duration-700 ease-in flex flex-col items-start  pl-[90px] pt-[110px] fixed w-[100vw] h-[calc(100vh-96px)] bg-alova z-40 top-[96px] lg:top-auto text-murko text-4xl gap-10 lg:ml-[-5rem]">
      <li class="cursor-pointer hover:text-verza" @click="scrollTo('about-section'); toggleActive = false">About</li>
      <li class="cursor-pointer hover:text-verza" @click="scrollTo('menu-section'); toggleActive = false">Menu</li>
      <li class="cursor-pointer hover:text-verza" @click="scrollTo('gallery-section'); toggleActive = false">Gallery
      </li>
      <li class="cursor-pointer hover:text-verza" @click="scrollTo('testimonial-section'); toggleActive = false">
        Testimoni
      </li>
      <li
        class="w-auto h-auto  py-3 px-6 hover:bg-verza border-2 border-drakar lg:border-alova rounded-xl text-4xl lg:text-2xl text-murko hover:text-alova lg:text-alova font-hore lg:absolute lg:right-0 cursor-pointer">
        RESERVASI
      </li>
    </ul>
    <button id="toggle-menu" class="lg:hidden cursor-pointer" @click="toggleActive = !toggleActive">
      <img :src="'/icons/' + [toggleActive ? 'close' : 'more'] + '.svg'" alt="menu icon" class="size-10">
    </button>
  </nav>
</template>