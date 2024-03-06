<script setup>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
    click: () => {
      console.log('Edit')
    }
  },    
  {
    label: 'Logout',
    To: '/'
  }]
]
const items2 = {
  'Product': [
    { name: 'Product', link: '/product' },
    { name: 'Presentation', link: '/presentation' },
    { name: 'Pricing', link: '/pricing' },
  ],
  'Company': [
    { name: 'About', link: '/about' },
    { name: 'The team', link: '/team' },
    { name: 'Contact us', link: '/contact' },
    { name: 'Roadmap', link: '/roadmap' },
  ],
  'Community': [
    { name: 'Blog', link: '/blog' },
    { name: 'Help', link: '/help' },
    { name: 'Contact us', link: '/contact' },
  ],
};
</script>

<template>
<section>

    <div class="toggledSubmenu">
      <div class="clicked-menuButton" @click="toggleDropdown('Product')">
        <div class="text-menu">Product</div>
      </div>
      <div class="submenu">
        <div class="submenuButton">
          <div class="text-menuButton">Presentation</div>
        </div>
        <div class="submenuButton">
          <NuxtLink to="/pricing">
            <div class="text-menuButton">Pricing</div>
          </NuxtLink>
        </div>
        <div class="submenuButton">
        <NuxtLink to="/roadmap">
          <div class="text-menuButton">Roadmap</div>
        </NuxtLink>
        </div>
      </div>
    </div>
    <div class="toggledSubmenu">
      <div class="clicked-menuButton" @click="toggleDropdown('Company')">
        <div class="text-menu">Company</div>
      </div>
      <div class="submenu">
        <div class="submenuButton">
        <NuxtLink to="/about">
          <div class="text-menuButton">About</div>
        </NuxtLink>
        </div>
        <div class="submenuButton">
        <NuxtLink to="/team">
          <div class="text-menuButton">The Team</div>
        </NuxtLink>
        </div>
        <div class="submenuButton">
          <div class="text-menuButton">Contact US</div>
        </div>
      </div>
    </div>
    <div class="toggledSubmenu">
      <div class="clicked-menuButton" @click="toggleDropdown('Community')">
        <div class="text-menu">Community</div>
      </div>
      <div class="submenu">
        <div class="submenuButton">
          <NuxtLink to="/blog">
            <div class="text-menuButton">Blog</div>
          </NuxtLink>
        </div>
        <div class="submenuButton">
          <div class="text-menuButton">Help</div>
        </div>
        <div class="submenuButton">
        <NuxtLink to="/documentation">
            <div class="text-menuButton">Documentation</div>
        </NuxtLink>
        </div>
      </div>
    </div>
</section>
</template>

<style scoped>
.clicked-menuButton{
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  border-radius: 0px 7px;
  border: 2px solid #FFF;
  background: linear-gradient(180deg,rgba(#bdbdbd) 20%,rgba(94, 94, 94, 0) 100%, rgba(39, 39, 39, 0.2)0%);
  box-shadow: 0px -3px 8px 0px rgba(255, 255, 255, 0.2);
}
section{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  background-color: #1f1f1f;
}
.submenu{
  display: flex;
  padding: 3px 2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 5px 0px 5px 5px;
  background-color: #1f1f1f;
  box-shadow: 0px 3px 10px 0px rgba(32, 32, 32, 0.25);
}
.submenuButton{
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  align-self: stretch;
  border-radius: 0px 7px;
  border: 2px solid #FFF;
  background: linear-gradient(180deg,rgba(#bdbdbd) 20%,rgba(94, 94, 94, 0) 100%, rgba(39, 39, 39, 0.2)0%);
  box-shadow: 0px -3px 8px 0px rgba(255, 255, 255, 0.2);
}
.submenuButton:hover{
  color: #ffffff;
  background: linear-gradient(180deg,rgba(#bdbdbd) 20%,rgba(94, 94, 94, 0) 100%, rgba(39, 39, 39, 0.2)0%);
  box-shadow: 0px -3px 8px 0px rgba(255, 255, 255, 0.2);
}
.toggledSubmenu {
  display: inline-flex;
  padding: 0rem 0.1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  border-radius: 0rem 0.7rem;
  background: linear-gradient(120deg,rgba(#1b1b1b) 80%,rgba(31, 31, 31, 0) 100%, rgba(24, 24, 24, 0.2)0%);
  }
.text-menu{
  display: flex;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3rem;
  justify-content: center;
  align-items: center;
  color:rgba(255, 255, 255, 0.8);
  min-width: 10rem;
  padding: 0.3rem;
  border-radius: 0px 7px;
  background: linear-gradient(180deg, #2b2b2b 0%, rgba(39, 39, 39, 0) 100%, rgba(43, 43, 43, 0.2)0%);
  mix-blend-mode: screen;
  box-shadow: 0px -1px 4px 0px rgba(7, 7, 7, 0.2);
}
</style>