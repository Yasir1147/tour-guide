<template>
  <section class="w-full bg-white py-10">
    <div class="max-w-[1300px] mx-auto relative px-6 md:px-12 lg:px-20">
      <!-- Heading -->
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        Things to do wherever you're going
      </h2>

      <!-- Left Button -->
      <button
        @click="scrollLeft"
        class="hidden md:flex items-center justify-center absolute -left-5 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:shadow-md rounded-full p-2 z-10 transition"
      >
        <UIcon name="i-heroicons-chevron-left" class="text-gray-600" />
      </button>

      <!-- Cards Slider -->
      <div
        ref="slider"
        class="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >
        <div
          v-for="(city, index) in cities"
          :key="index"
          class="relative flex-shrink-0 w-[180px] h-[260px] snap-start rounded-xl overflow-hidden cursor-pointer group"
        >
          <!-- City Image -->
          <img
            :src="city.image"
            :alt="city.name"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <!-- City Label -->
          <div
            class="absolute top-3 left-3 bg-[#0a2540] text-white text-sm font-semibold px-3 py-1 rounded"
          >
            {{ city.name }}
          </div>
        </div>
      </div>

      <!-- Right Button -->
      <button
        @click="scrollRight"
        class="hidden md:flex items-center justify-center absolute -right-5 top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:shadow-md rounded-full p-2 z-10 transition"
      >
        <UIcon name="i-heroicons-chevron-right" class="text-gray-600" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const slider = ref(null)

const scrollLeft = () => {
  slider.value.scrollBy({ left: -250, behavior: 'smooth' })
}
const scrollRight = () => {
  slider.value.scrollBy({ left: 250, behavior: 'smooth' })
}

const cities = [
  {
    name: 'Paris',
    image: '/grid-1.jpg'
  },
  {
    name: 'Amsterdam',
    image: '/grid-2.jpg'
  },
  {
    name: 'Marrakesh',
    image: '/grid-3.jpeg'
  },
  {
    name: 'London',
    image: '/grid-4.jpeg'
  },
  {
    name: 'Barcelona',
    image: '/grid-5.png'
  },
  {
    name: 'Budapest',
    image: '/grid-2.jpg'
  }
]
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
