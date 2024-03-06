<script setup>
</script>

<template>
  <div v-if="$device.isDesktop"
    class="flex items-center justify-between py-2 px-20 w-full h-[128px] z-[3] sticky top-0 left-0 backdrop-blur">
    <NuxtLink to="/" class="opacity-100 hover:opacity-60">
      <div class="flex justify-between items-center py-[5px]">
        <img src="~/assets/images/Logo_White.png" alt="Company Logo" class="w-[70px] flex-none" />
        <div class="flex flex-col text-center">
          <img src="~/assets/images/title-gold.png" class="w-[230px]" />
          <img src="~/assets/images/InUsWeTrust.png" class="w-[200px] mx-auto" />
        </div>
      </div>
    </NuxtLink>

    <div class="flex items-center rounded-br-lg rounded-tl-lg bg-[#111111] p-[10px] gap-5 shadow-inner">
      <div
        class="rounded-br-lg rounded-tl-lg p-[4.5px] border-[2px] border-[white] bg-gradient-to-b from-[#474747] from-50% via-[#474747] via-60% to-[#818181] font-[Kanit] opacity-70 hover:opacity-100">
        <NuxtLink to="/roadmap" class="text-[25px] py-4 px-4">Product</NuxtLink>
      </div>
      <div
        class="rounded-br-lg rounded-tl-lg p-[4.5px] border-[2px] border-[white] bg-gradient-to-b from-[#474747] from-50% via-[#474747] via-60% to-[#818181] opacity-70 hover:opacity-100">
        <NuxtLink to="/company" class="text-[25px] py-4 px-4">Company</NuxtLink>
      </div>
      <div
        class="rounded-br-lg rounded-tl-lg p-[4.5px] border-[2px] border-[white] bg-gradient-to-b from-[#474747] from-50% via-[#474747] via-60% to-[#818181] opacity-70 hover:opacity-100">
        <NuxtLink to="/documentation" class="text-[25px] py-4 px-4">Documentation</NuxtLink>
      </div>
      <div
        class="rounded-br-lg rounded-tl-lg p-[4.5px] border-[2px] border-[white] bg-gradient-to-b from-[#474747] from-50% via-[#474747] via-60% to-[#818181] opacity-70 hover:opacity-100">
        <NuxtLink to="/community" class="text-[25px] py-4 px-4">Community</NuxtLink>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-between items-center p-2 px-[20px] h-[80px] z-[3] sticky top-0 left-0 backdrop-blur">
    <div class="flex gap-1 items-center">
      <img src="~/assets/images/Logo_White.png" alt="Company Logo" class="w-[30px]" />
      <img src="~/assets/images/title-gold.png" alt="Company Logo" class="w-[150px]" />
    </div>
    <Icon name="ic:outline-storage" class="text-[25px] text-[white]"/>
  </div>
</template>

<style scoped></style>