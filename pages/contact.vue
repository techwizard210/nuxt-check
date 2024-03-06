<script setup></script>

<template>
    <div class="flex flex-col gap-5 w-[70%] mx-auto bg-[#202020] p-[20px] rounded-br-lg rounded-tl-lg mt-5">
        <div class="bg-[#686868] px-[20px] py-[5px] rounded-tr-lg rounded-bl-lg text-[40px]">
            <p>Contact us</p>
        </div>
        <div class="text-center">
            <p class="text-[36px]">Build the best trading platform for everyone.</p>
        </div>
    </div>

    <div
        class="mt-20 mx-[auto] flex flex-col gap-3 bg-gradient-to-r from-[#606060] from-50% via-[#474747] via-60% to-[#818181] w-[800px] rounded-br-lg rounded-tl-lg shadow-xl p-[10px] text-center">
        <p class="text-[30px] font-['Ethnocentric'] italic">SUBSCRIBE TO OUR NEWSLETTER:</p>
        <div class="w-[450px] flex rounded-tr-lg rounded-bl-lg border-2 border-orange-300 px-[5px] py-[6px] mx-auto">
            <input class="basis-3/4 italic text-[20px] px-[20px] bg-transparent focus:border-none"
                placeholder="your-email@address.com" />
            <div class="text-[32px] basis-1/4 rounded-br-lg rounded-tl-lg bg-[#202020] p-[5px]">Send</div>
        </div>
    </div>
</template>

<style scoped>
textarea:focus,
input:focus {
    outline: none;
}
</style>