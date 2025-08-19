<script setup>
const props = defineProps(['item'])
const formatRupiah = (val) => {
  return new Intl.NumberFormat("id-ID", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(val);
};
</script>
<template>
  <div id="menu-card" class="w-full h-auto border-2 border-drakar rounded-xl flex items-center overflow-hidden">
    <img :src="'/images/menu/' + props.item.type + '/' + props.item.name.toLowerCase().replace(/\s+/g, '-') + '.png'"
         alt="" class="w-[100px] lg:w-[171px] h-full bg-cover">
    <div class="flex flex-col items-start gap-1.5 lg:gap-2 px-4 lg:px-8 ">
      <h5 class="text-murko text-[1.75rem] lg:text-[2rem] font-hore">{{ props.item.name }}</h5>
      <p class="text-murko text-sm lg:text-base font-medium font-mulish">{{ props.item.description }}</p>
      <div class="bg-verza px-3 py-1 border border-drakar rounded-sm text-alova text-lg lg:text-[1.75rem] font-hore">
        Rp {{ formatRupiah(props.item.price) }}
      </div>
    </div>
  </div>
</template>
