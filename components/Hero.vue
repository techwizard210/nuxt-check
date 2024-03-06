<template>
  <div v-if="$device.isDesktop">
    <div
      class="mx-auto w-fit border-2 border-[white] rounded-br-lg rounded-tl-lg p-[10px] bg-gradient-to-b from-[#474747] from-50% via-[#474747] via-60% to-[#818181] mt-20">
      <p class="text-[30px] font-['Ethnocentric'] italic">IN US WE TRUST</p>
    </div>
    <img loading="lazy" src="~/assets/images/InvestmentClockDall.png" alt="InvestmentClockDall"
      class="w-[300px] mx-[auto] mt-20" />
    <div
      class="mt-20 mx-[auto] flex justify-center gap-7 text-[2.8rem] bg-gradient-to-r from-[#606060] from-50% via-[#474747] via-60% to-[#818181] w-[460px] rounded-br-lg rounded-tl-lg shadow-xl p-[15px] pt-[5px]">
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="hover:text-[#55acee]">
        <Icon name="bi:twitter" />
      </a>
      <a href="https://youtube.com/JetSetVideo/Strades_info" target="_blank" rel="noopener noreferrer">
        <Icon name="bi:youtube" class="hover:text-[#e43030]" />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
        <Icon name="bi:facebook" class="hover:text-[#1877f2]" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
        <Icon name="bi:instagram" class="hover:text-[black]" />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <Icon name="bi:linkedin" class="hover:text-[#0a66c2]" />
      </a>
    </div>
    <div
      class="mt-20 mx-[auto] flex flex-col gap-3 bg-gradient-to-r from-[#606060] from-50% via-[#474747] via-60% to-[#818181] w-[500px] rounded-br-lg rounded-tl-lg shadow-xl p-[15px] text-center">
      <p class="text-[30px] font-['Ethnocentric'] italic">JOIN OUR BETA NOW:</p>
      <div class="w-full flex rounded-tr-lg rounded-bl-lg border-[1px] px-[5px] py-[6px] mx-auto">
        <input class="basis-3/4 italic text-[20px] px-[20px] bg-transparent focus:border-none"
          placeholder="your-email@address.com" />
        <div class="text-[32px] basis-1/4 rounded-br-lg rounded-tl-lg bg-[#202020] p-[5px]">Send</div>
      </div>
    </div>
    <div
      class="mt-20 mx-[auto] flex flex-col gap-3 bg-gradient-to-r from-[#606060] from-50% via-[#474747] via-60% to-[#818181] w-[800px] rounded-br-lg rounded-tl-lg shadow-xl p-[10px] text-center">
      <p class="text-[30px]  font-['Ethnocentric'] italic">SUBSCRIBE TO OUR NEWSLETTER:</p>
      <div class="w-[450px] flex rounded-tr-lg rounded-bl-lg border-2 border-orange-300 px-[5px] py-[6px] mx-auto">
        <input class="basis-3/4 italic text-[20px] px-[20px] bg-transparent focus:border-none"
          placeholder="your-email@address.com" />
        <div class="text-[32px] basis-1/4 rounded-br-lg rounded-tl-lg bg-[#202020] p-[5px]">Send</div>
      </div>
    </div>

    <div
      class="flex gap-5 items-center w-[70%] mx-auto bg-[#202020]/85 p-[20px] rounded-br-lg rounded-tl-lg mt-20 uni-border">
      <img src="~/assets/images/CoinClockGoldenDallE.png" class="w-[150px] h-[150px] rounded-tr-lg rounded-bl-lg"
        alt="CoinClockGoldenDallE">
      <div class="flex grow flex-col rounded-br-lg rounded-tl-lg">
        <div class="bg-[#686868] px-[20px] py-[5px] text-center rounded-tr-lg rounded-bl-lg text-[40px]">
          <p>Invest in yourself and your entourage</p>
        </div>
        <div class="text-[36px] text-center p-[10px]">
          <p>Keep track of your investments on a daily basis and share your findings with your relatives.</p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-row-reverse gap-5 items-center w-[70%] mx-auto bg-[#202020]/85 p-[20px] rounded-br-lg rounded-tl-lg mt-20 uni-border">
      <img src="~/assets/images/GoldenInfinityClocksComparingDallE.png"
        class="w-[156px] h-[156px] rounded-tr-lg rounded-bl-lg" alt="GoldenInfinityClocksComparingDallE">
      <div class="flex grow flex-col rounded-br-lg rounded-tl-lg">
        <div class="bg-[#686868] px-[20px] py-[5px] text-center rounded-tr-lg rounded-bl-lg text-[40px]">
          <p>Compare or Combine your Portfolios</p>
        </div>
        <div class="text-[36px] text-center p-[10px]">
          <p>Mix your performance with your friends or the best traders.</p>
        </div>
      </div>
    </div>

    <div
      class="flex gap-5 items-center w-[70%] mx-auto bg-[#202020]/85 p-[20px] rounded-br-lg rounded-tl-lg mt-20 uni-border">
      <img src="~/assets/images/iconGeneratorBacktestDallE.png" class="w-[150px] h-[150px] rounded-tr-lg rounded-bl-lg"
        alt="iconGeneratorBacktestDallE">
      <div class="flex grow flex-col rounded-br-lg rounded-tl-lg">
        <div class="bg-[#686868] px-[20px] py-[5px] text-center rounded-tr-lg rounded-bl-lg text-[40px]">
          <p>Build, test, share or rent strategies</p>
        </div>
        <div class="text-[36px] text-center p-[10px]">
          <p>Create complex Backtest strategies with minimal inputs. Then pass them from their Backtest forms into
            Livetest.</p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-row-reverse gap-5 items-center w-[70%] mx-auto bg-[#202020]/85 p-[20px] rounded-br-lg rounded-tl-lg mt-20 uni-border">
      <img src="~/assets/images/IconCapitalAllocationBrainAIDallE.png"
        class="w-[156px] h-[156px] rounded-tr-lg rounded-bl-lg" alt="IconCapitalAllocationBrainAIDallE">
      <div class="flex grow flex-col rounded-br-lg rounded-tl-lg">
        <div class="bg-[#686868] px-[20px] py-[5px] text-center rounded-tr-lg rounded-bl-lg text-[40px]">
          <p>Optimal Management of your Capital</p>
        </div>
        <div class="text-[36px] text-center p-[10px]">
          <p>Optimize your capital allocation with your AI</p>
        </div>
      </div>
    </div>

    <div
      class="flex gap-5 items-center w-[70%] mx-auto bg-[#202020]/85 p-[20px] rounded-br-lg rounded-tl-lg mt-20 uni-border">
      <img src="~/assets/images/iconFromMobileToDesktopDallE.png"
        class="w-[150px] h-[150px] rounded-tr-lg rounded-bl-lg" alt="iconFromMobileToDesktopDallE">
      <div class="flex grow flex-col rounded-br-lg rounded-tl-lg">
        <div class="bg-[#686868] px-[20px] py-[5px] text-center rounded-tr-lg rounded-bl-lg text-[40px]">
          <p>Track your investments everywhere at anytime</p>
        </div>
        <div class="text-[36px] text-center p-[10px]">
          <p>From your phone to your computer</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div
      class="mx-auto w-fit border-2 border-[white] rounded-br-lg rounded-tl-lg p-[10px] bg-gradient-to-b from-[#474747] from-50% via-[#474747] via-60% to-[#818181] mt-20">
      <p class="text-[25px] font-['Ethnocentric'] italic">IN US WE TRUST</p>
    </div>

    <div
      class="mt-5 mx-[auto] w-[80%] flex justify-center gap-2 text-[2rem] bg-gradient-to-r from-[#606060] from-50% via-[#474747] via-60% to-[#818181] rounded-br-lg rounded-tl-lg shadow-xl p-[15px] pt-[5px]">
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="hover:text-[#55acee]">
        <Icon name="bi:twitter" />
      </a>
      <a href="https://youtube.com/JetSetVideo/Strades_info" target="_blank" rel="noopener noreferrer">
        <Icon name="bi:youtube" class="hover:text-[#e43030]" />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
        <Icon name="bi:facebook" class="hover:text-[#1877f2]" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
        <Icon name="bi:instagram" class="hover:text-[black]" />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <Icon name="bi:linkedin" class="hover:text-[#0a66c2]" />
      </a>
    </div>
  </div>

</template>

<script setup></script>

<style scoped>
textarea:focus,
input:focus {
  outline: none;
}
</style>
