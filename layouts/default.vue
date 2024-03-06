<template>
  <div class="font-[Kanit] bg-[url('@/assets/images/image_hero.jpg')] bg-cover bg-no-repeat">
    <NavigationBar />
    <div class="flex flex-col">
      <NuxtPage />
      <AppFooter />
      <div
        class="fixed right-10 bottom-20 border-2 border-[white] rounded-br-lg rounded-tl-lg p-[10px] bg-gradient-to-b from-[#474747] from-50% via-[#474747] via-60% to-[#818181] opacity-60 hover:opacity-100"
        @click="scrollTop" v-show="isScrolled">
        <Icon name="ic:baseline-arrow-upward" class="text-[60px] hover:cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script setup>
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.mainPage {
  display: flex;
}
</style>
