<script setup>
</script>

<template>
  <section id="footer-section"
           class="w-full h-auto lg:h-screen bg-alova px-5 md:px-[40px] lg:px-[98px] xl:px-[109px] flex flex-col gap-6 justify-center">
    <div
      class="w-full h-auto lg:h-[488px] bg-murko rounded-[1.125rem] mt-[57px] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 pt-32 pb-12 lg:py-0 px-8 lg:px-8 xl:px-[4.125rem] 2xl:px-[4.5rem] relative">
      <div class="absolute top-0 left-1/2 -translate-1/2 w-[151px] h-[151px]">
        <img src="/images/logo-full.png" alt="" class="w-[145px] h-[145px] absolute top-0 left-0 z-40"/>
        <div class="w-[145px] h-[145px] bg-alova z-30 absolute bottom-0 right-0 rounded-full"></div>
      </div>
      <div class="lg:w-[450px] w-full h-[240px] lg:h-[320px] bg-base xl:rounded-[18px] rounded-[10px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716.4353955688127!2d106.81507200391667!3d-6.258075910489273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17f86448b97%3A0xa50b66e958e93ed!2sJl.%20Kemang%20Raya%20No.15%2C%20RT.6%2FRW.1%2C%20Bangka%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012730!5e0!3m2!1sid!2sid!4v1741105224283!5m2!1sid!2sid"
          width="700"
          height="440"
          loading="lazy"
        ></iframe>
      </div>
      <div class="w-full lg:w-[450px] h-auto flex flex-col gap-10">
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
            <p>0812-3456-7890</p>
          </li>
          <li class="flex gap-3 items-start">
            <img src="/icons/email.svg" alt="" class="mt-1">
            <p class="shrink-0">Email :</p>
            <p>hello@terasdalu.id</p>
          </li>
          <li class="flex gap-3 items-start">
            <img src="/icons/instagram.svg" alt="" class="mt-1">
            <p class="shrink-0">Instagram :</p>
            <p>@terasdalu.bdg</p>
          </li>
        </ul>
      </div>
    </div>
    <footer
      class="w-full h-[100px] bg-murko rounded-[1.125rem] flex justify-between items-center px-[clamp(1.25rem,_2vw,_2rem)]">
      <img alt="Teras Dalu Logo" class="size-20 cursor-pointer" src="/images/logo.svg">
      <p class="text-alova text-xl font-hore">Copyright © 2025 Teras Dalu</p>
      <div>
        <img src="/icons/arrow-up.svg" alt="" class="cursor-pointer"/>
      </div>
    </footer>
  </section>
</template>