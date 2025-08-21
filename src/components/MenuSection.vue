<script setup>
import MenuCard from "./MenuCard.vue";
import menusData from "../data/menu.json"
import {ref, computed} from 'vue'

const showAllMenu = ref(false);

const menus = ref(menusData || [])

const displayedMenu = computed(() => {
  return showAllMenu.value
    ? menus.value
    : menus.value.filter(item => item.featured)
})

const toggleMenu = () => {
  showAllMenu.value = !showAllMenu.value;
}
</script>

<template>
  <section id="menu-section"
           class="w-full h-auto bg-alova px-5 md:px-[40px] lg:px-[98px] xl:px-[109px] py-[26px] lg:py-[98px] flex flex-col gap-16 lg:gap-20 items-center">
    <h1 class="text-murko text-5xl text-center lg:text-7xl font-hore" data-aos="fade-up" data-aos-delay="0">Menu Populer
      Kami</h1>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-20 lg:gap-9">
      <MenuCard v-for="(item, index) in displayedMenu" :key="item.id" :item="item" data-aos="fade-up"
                :data-aos-delay="(index+1)*20"/>
    </div>
    <button
      class="border-2 border-drakar text-murko text-2xl font-hore px-7 py-3 lg:py-5 rounded-lg hover:bg-verza hover:text-alova cursor-pointer"
      @click="toggleMenu" data-aos="fade-up" data-aos-delay="50">
      {{ showAllMenu ? 'Lihat Lebih Sedikit' : 'Menu Lainnya' }}
    </button>
  </section>
</template>
