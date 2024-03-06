<script setup>
</script>

<template>
    <footer class="w-full py-[30px] bg-gradient-to-t from-[#3E3E3E] mt-20">
        <div v-if="$device.isDesktop" class="flex justify-between w-[750px] mx-auto text-[23px]">
            <NuxtLink to="/" class="hover:opacity-60">
                <p>Charts</p>
            </NuxtLink>
            <NuxtLink to="/" class="hover:opacity-60">
                <p>About us</p>
            </NuxtLink>
            <NuxtLink to="/" class="hover:opacity-60">
                <p>Refer a friend</p>
            </NuxtLink>
            <NuxtLink to="/" class="hover:opacity-60">
                <p>Widgets</p>
            </NuxtLink>
            <NuxtLink to="/" class="hover:opacity-60">
                <p>FAQ</p>
            </NuxtLink>
            <NuxtLink to="/" class="hover:opacity-60">
                <p>Contact us</p>
            </NuxtLink>
        </div>
        <div v-else class="flex gap-10 mx-auto w-fit text-[20px]">
            <div class="flex flex-col">
                <NuxtLink to="/" class="hover:opacity-60">
                    <p>Charts</p>
                </NuxtLink>
                <NuxtLink to="/" class="hover:opacity-60">
                    <p>About us</p>
                </NuxtLink>
                <NuxtLink to="/" class="hover:opacity-60">
                    <p>Refer a friend</p>
                </NuxtLink>
            </div>
            <div class="flex flex-col">
                <NuxtLink to="/" class="hover:opacity-60">
                    <p>Widgets</p>
                </NuxtLink>
                <NuxtLink to="/" class="hover:opacity-60">
                    <p>FAQ</p>
                </NuxtLink>
                <NuxtLink to="/" class="hover:opacity-60">
                    <p>Contact us</p>
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>

<style scoped></style>