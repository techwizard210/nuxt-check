<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);
const currentCategory = ref(null); // Track the current category

function toggleDropdown(categoryName) {
  if (isDropdownOpen.value && currentCategory.value === categoryName) {
    isDropdownOpen.value = false; // Close if the same category is clicked again
  } else {
    isDropdownOpen.value = true;
    currentCategory.value = categoryName; // Update the current category
  }
}

const items = {
  'Product': [
    { name: 'Product', link: '/product' },
    { name: 'Presentation', link: '/presentation' },
    { name: 'Pricing', link: '/pricing' },
  ],
  'Company': [
    { name: 'About', link: '/about' },
    { name: 'The team', link: '/team' },
    { name: 'Contact us', link: '/contact' },
  ],
};
</script>

<template>
    <div class="container-dropdown">
      <div class="dropdown-button" v-for="(categoryItems, categoryName) in items" :key="categoryName">
        <!-- This button is for selecting a category -->
        <button @click="toggleDropdown(categoryName)">{{ categoryName }}</button>
     </div>
  
      <!-- Dropdown content for the selected category -->
      <div v-if="isDropdownOpen" class="dropdown-content">
        <NuxtLink v-for="item in items[currentCategory]" :key="item.name" :to="item.link">{{ item.name }}</NuxtLink>
      </div>

    </div>
  </template>
  
<style scoped>
.container-dropdown {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 6px;
    gap: 5px;
    align-self: center;
    border-radius: 0px 7px;
    border: 2px solid #FFF;
    background: linear-gradient(180deg, rgb(100, 100, 100) 20%, rgba(80, 80, 80, 0) 100%, rgba(39, 39, 39, 0.2) 0%);
    box-shadow: 0px -3px 8px 0px rgba(255, 255, 255, 0.2);
}

.dropdown-button {
    cursor: pointer;
    background: linear-gradient(120deg, rgba(27, 27, 27) 80%, rgba(31, 31, 31, 0) 100%, rgba(24, 24, 24, 0.2) 0%);
    border: none;
    padding: 10px 15px;
    border-radius: 0px 7px;
    color: white;
}

.dropdown-content {
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 5px;
    border-radius: 0px 7px;
    border: 2px solid #FFF;
    background: linear-gradient(180deg, rgba(189, 189, 189) 20%, rgba(94, 94, 94, 0) 100%, rgba(39, 39, 39, 0.2) 0%);
    box-shadow: 0px 3px 8px 0px rgba(255, 255, 255, 0.2);
    margin-top: 5px;
}

.dropdown-content a {
    text-decoration: none;
    color: white;
    padding: 5px;
    text-align: center;
}

.dropdown-content a:hover {
    background-color: rgba(36, 36, 36, 0.3);
    border: 2px solid rgba(36, 36, 36, 0.5);
    border-radius: 0px 7px;
}
</style>
  