<template>
  <section class="w-full bg-white py-10 border-t border-gray-200">
    <div class="max-w-[1200px] mx-auto px-6 md:px-12">
      <!-- Tabs -->
      <div class="flex flex-wrap gap-6 text-sm font-medium text-gray-600 border-b border-gray-200">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.name"
          @click="activeTab = index"
          class="relative pb-3 transition text-gray-700 hover:text-[#003580]"
        >
          {{ tab.name }}
          <span
            v-if="activeTab === index"
            class="absolute bottom-0 left-0 w-full h-[2px] bg-[#003580] rounded-full"
          ></span>
        </button>
      </div>

      <!-- Tab Content -->
      <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 gap-x-6 text-sm">
        <div
          v-for="(item, idx) in tabs[activeTab].items"
          :key="idx"
          class="flex flex-col"
        >
          <span class="text-[#003580] font-medium hover:underline cursor-pointer">
            {{ item.title }}
          </span>
          <span class="text-gray-500 text-xs">{{ item.subtitle }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const tabs = [
  {
    name: 'Top attractions worldwide',
    items: [
      { title: 'Vatican Museums', subtitle: '513 tours & activities' },
      { title: 'Colosseum', subtitle: '1071 tours & activities' },
      { title: 'Louvre Museum', subtitle: '490 tours & activities' },
      { title: 'Danube River, Hungary', subtitle: '145 tours & activities' },
      { title: 'Eiffel Tower', subtitle: '471 tours & activities' },
      { title: 'Notre Dame Cathedral', subtitle: '421 tours & activities' },
      { title: 'Burj Khalifa', subtitle: '201 tours & activities' },
      { title: 'Memorial and Museum A...', subtitle: '114 tours & activities' },
      { title: 'Sagrada Familia', subtitle: '314 tours & activities' },
      { title: 'Warner Bros. Studio London', subtitle: '23 tours & activities' },
      { title: 'Alhambra', subtitle: '144 tours & activities' },
      { title: 'Caminito del Rey', subtitle: '49 tours & activities' },
      { title: 'Ha Long Bay', subtitle: '865 tours & activities' },
      { title: 'Alcázar of Seville', subtitle: '137 tours & activities' },
      { title: 'Last Supper', subtitle: '43 tours & activities' },
      { title: 'Moulin Rouge', subtitle: '111 tours & activities' },
      { title: 'Aquaventure Waterpark', subtitle: '20 tours & activities' },
      { title: 'Santa Claus Village', subtitle: '98 tours & activities' },
      { title: 'Mount Etna', subtitle: '338 tours & activities' },
      { title: 'YONA Beach Club', subtitle: '1 tour & activity' },
    ]
  },
  {
    name: 'Top destinations',
    items: [
      { title: 'Dubai', subtitle: '1,234 tours & activities' },
      { title: 'Rome', subtitle: '1,045 tours & activities' },
      { title: 'Paris', subtitle: '875 tours & activities' },
      { title: 'New York City', subtitle: '712 tours & activities' },
      { title: 'Tokyo', subtitle: '633 tours & activities' },
      { title: 'London', subtitle: '521 tours & activities' },
      { title: 'Bangkok', subtitle: '484 tours & activities' },
      { title: 'Barcelona', subtitle: '450 tours & activities' },
    ]
  },
  {
    name: 'Top countries to visit',
    items: [
      { title: 'Italy', subtitle: '3,541 tours & activities' },
      { title: 'France', subtitle: '2,833 tours & activities' },
      { title: 'Spain', subtitle: '2,214 tours & activities' },
      { title: 'UAE', subtitle: '1,245 tours & activities' },
      { title: 'Japan', subtitle: '1,023 tours & activities' },
    ]
  },
  {
    name: 'Top attraction categories',
    items: [
      { title: 'Museums', subtitle: '2,000+ tours & tickets' },
      { title: 'Waterparks', subtitle: '125 attractions' },
      { title: 'Guided Tours', subtitle: '1,800+ experiences' },
      { title: 'Adventure', subtitle: '1,200+ activities' },
      { title: 'City Passes', subtitle: '200+ locations' },
    ]
  }
]
</script>
