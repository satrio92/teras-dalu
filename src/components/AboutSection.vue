<script setup>
</script>

<template>
  <section id="about-section"
           class="w-full h-auto lg:h-screen bg-alova px-5 md:px-[40px] lg:px-[98px] xl:px-[109px] py-[26px] grid grid-cols-1 lg:grid-cols-[179fr_129fr] grid-rows-[100px_340px_470px] lg:grid-rows-[120fr_479fr] gap-x-[62px] gap-y-[32px] lg:gap-y-[44px]">
    <div
      class="col-span-1 lg:col-span-2 order-1 bg-drakar bg-[url(/images/quote-bg.png)] flex justify-center items-center rounded-2xl text-alova text-2xl lg:text-3xl text-center font-hore"
      data-aos="fade-down" data-aos-delay="0">
      "Ada yang lebih nikmat dari kopi — yaitu tenangnya sore di Teras Dalu."
    </div>
    <div class="col-span-1 order-3 lg:order-2 relative" data-aos="fade-right" data-aos-delay="150">
      <div
        class="w-[calc(100%-1rem)] h-[calc(100%-1rem)] px-5 lg:px-[46px] bg-alova border-2 border-drakar rounded-2xl absolute top-0 left-0 z-30 flex flex-col justify-center gap-7 lg:gap-10"
      >
        <div class="flex flex-col lg:flex-row mb-2.5 mr-2.5 gap-6 lg:gap-8 items-center lg:items-start">
          <div id="logo-about"
               class="w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] bg-[url(/images/logo-full.png)] relative bg-cover">
            <div
              class="w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] rounded-full bg-drakar absolute -z-10 left-2.5 top-2.5"></div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-murko text-5xl lg:text-6xl font-hore text-center lg:text-start"><span
              class="text-4xl lg:text-5xl">Tentang</span><br>
              Teras Dalu
            </h3>
            <img src="/images/line-about.svg" alt="" class="scale-75 lg:scale-100">
          </div>
        </div>
        <p class="text-murko text-xl lg:text-2xl text-center lg:text-start font-mulish font-semibold">Teras Dalu lahir
          dari
          kecintaan kami pada kopi dan
          suasana tenang di tengah kota Bandung. Kami menghadirkan tempat ngopi santai dengan nuansa rumah sendiri,
          cocok untuk bekerja, ngobrol, atau sekadar menikmati sore.</p>
      </div>
      <div class="w-[calc(100%-1rem)] h-[calc(100%-1rem)] bg-drakar rounded-2xl absolute bottom-0 right-0 z-20"></div>
    </div>
    <div class="col-span 1 order-2 lg:order-3 relative" data-aos="fade-left" data-aos-delay="150">
      <div
        class="w-[calc(100%-1rem)] h-[calc(100%-1rem)] bg-[url(/images/about-image.png)] border-2 border-drakar rounded-2xl absolute top-0 left-0 z-30 bg-cover bg-center"></div>
      <div class="w-[calc(100%-1rem)] h-[calc(100%-1rem)] bg-drakar rounded-2xl absolute bottom-0 right-0 z-20"></div>
    </div>
  </section>
</template>