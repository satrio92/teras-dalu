<script setup>
const scrollTo = (sectionId) => {
  const target = document.getElementById(sectionId)
  target?.scrollIntoView({behavior: 'smooth'})
}
</script>

<template>
  <section id="footer-section"
           class="w-full h-auto lg:h-screen bg-alova px-5 md:px-[40px] lg:px-[98px] xl:px-[109px] flex flex-col gap-6 justify-center">
    <div
      class="w-full h-auto lg:h-[488px] bg-murko rounded-[1.125rem] mt-[57px] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 pt-32 pb-12 lg:py-0 px-8 lg:px-8 xl:px-[4.125rem] 2xl:px-[4.5rem] relative">
      <div class="absolute top-0 left-1/2 -translate-1/2 w-[151px] h-[151px]" data-aos="fade-up" data-aos-delay="0">
        <img src="/images/logo-full.png" alt="" class="w-[145px] h-[145px] absolute top-0 left-0 z-40"/>
        <div class="w-[145px] h-[145px] bg-alova z-30 absolute bottom-0 right-0 rounded-full"></div>
      </div>
      <div class="lg:w-[450px] w-full h-[240px] lg:h-[320px] bg-base xl:rounded-[18px] rounded-[10px] overflow-hidden"
           data-aos="fade-up" data-aos-delay="75">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.1285429659254!2d107.60227493179565!3d-6.8789836232657615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6f22f4210e1%3A0x9263cef0a20ec02!2sJl.%20Ciumbuleuit%20No.105%2C%20Hegarmanah%2C%20Kec.%20Cidadap%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040141!5e0!3m2!1sid!2sid!4v1755616991942!5m2!1sid!2sid"
          width="700"
          height="440"
        ></iframe>
      </div>
      <div class="w-full lg:w-[450px] h-auto flex flex-col gap-10" data-aos="fade-up" data-aos-delay="150">
        <h4 class="text-alova text-[2.75rem] lg:text-[3.25rem] text-center lg:text-start font-hore">Teras Dalu
          Bandung </h4>
        <ul class="text-alova text-xl font-mulish font-semibold flex flex-col gap-3">
          <li class="flex gap-3 items-start">
            <img src="/icons/location.svg" alt="" class="mt-1">
            <p class="shrink-0">Lokasi :</p>
            <p>Jl. Ciumbuleuit No. 105, Bandung, 14263</p>
          </li>
          <li class="flex gap-3 items-start">
            <img src="/icons/clock.svg" alt="" class="mt-1">
            <p class="shrink-0">Jam Buka :</p>
            <p>08.00 – 22.00</p>
          </li>
        </ul>
        <ul class="text-alova text-xl font-mulish font-semibold flex flex-col gap-3">
          <li class="flex gap-3 items-start">
            <img src="/icons/whatsapp.svg" alt="" class="mt-1">
            <p class="shrink-0">WhatsApp :</p>
            <a href="#" class="hover:text-verza">0812-3456-7890</a>
          </li>
          <li class="flex gap-3 items-start">
            <img src="/icons/email.svg" alt="" class="mt-1">
            <p class="shrink-0">Email :</p>
            <a href="#" class="hover:text-verza">hello@terasdalu.id</a>
          </li>
          <li class="flex gap-3 items-start">
            <img src="/icons/instagram.svg" alt="" class="mt-1">
            <p class="shrink-0">Instagram :</p>
            <a href="#" class="hover:text-verza">@terasdalu.bdg</a>
          </li>
        </ul>
      </div>
    </div>
    <footer
      class="w-full h-[100px] bg-murko rounded-[1.125rem] flex justify-between items-center px-[clamp(1.25rem,_2vw,_2rem)]"
      data-aos="fade-up" data-aos-delay="225">
      <img alt="Teras Dalu Logo" class="size-20 cursor-pointer" src="/images/logo.svg"
           @click="scrollTo('header-section')">
      <p class="text-alova text-xl font-hore">Copyright © 2025 Teras Dalu</p>
      <div
        class="w-12 h-12 rounded-full flex justify-center items-center border-3 border-alova hover:border-0 hover:bg-verza cursor-pointer relative group"
        @click="scrollTo('header-section')">
        <p
          class="text-alova text-2xl font-semibold font-mulish absolute -ml-64 hidden group-hover:inline transition-all duration-500 ease-in">
          Kembali ke
          atas</p>
        <img src="/icons/arrow-up.svg" alt="" class="cursor-pointer"/>
      </div>
    </footer>
  </section>
</template>