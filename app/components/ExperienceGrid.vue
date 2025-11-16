<template>
  <section class="w-full bg-white py-10">
    <div class="max-w-[1300px] mx-auto relative px-6 md:px-12 lg:px-20">
      <!-- Heading -->
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        Based on your search in Dubai
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
        class="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
      >

      
        <div
          v-for="item in experiences"
          :key="item.id"
          class="flex-shrink-0 w-[270px] snap-start bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
          <!-- Image -->
          <div class="relative">
            <img
              :src="item.image"
              alt="Experience image"
              class="w-full h-[170px] object-cover"
            />
            <UButton
              icon="i-heroicons-heart"
              color="white"
              variant="soft"
              class="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-white"
            />
          </div>

          <!-- Content -->
          <div class="p-4 flex flex-col gap-1">
            <p class="text-[11px] uppercase text-gray-600 font-semibold">
              {{ item.category }}
            </p>
            <h3 class="font-semibold text-[15px] leading-tight line-clamp-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 text-xs font-semibold">{{ item.duration }}</p>

            <!-- Certification -->
            <div
              v-if="item.certified"
              class="flex items-center gap-1 text-xs text-gray-600 mt-1"
            >
              <UIcon name="i-heroicons-check-badge" class="text-green-600" />
              <span class=" font-semibold text-gray-600">  Certified by GetYourGuide</span>
         
            </div>

            <!-- Rating -->
            <div class="flex items-center gap-1 mt-2 text-[13px]">
              <div class="flex text-[#1a1a1a]">
                <UIcon
                  v-for="n in 5"
                  :key="n"
                  name="i-heroicons-star-solid"
                  class="text-black/80"
                />
              </div>
              <span class="text-xs text-gray-700">
                {{ item.rating }} ({{ item.reviews.toLocaleString() }})
              </span>
            </div>

            <!-- Price -->
            <div class="mt-2">
              <p
                v-if="item.oldPrice"
                class="text-xs text-gray-500 line-through font-semibold"
              >
                From {{ item.oldPrice }} د.إ
              </p>
              <p class="text-red-600 font-semibold text-sm">
                From {{ item.price }} د.إ
              </p>
            </div>
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
  slider.value.scrollBy({ left: -300, behavior: 'smooth' })
}
const scrollRight = () => {
  slider.value.scrollBy({ left: 300, behavior: 'smooth' })
}

const experiences = [
  {
    id: 1,
    image: '/grid-1.jpg',
    category: 'Entry Ticket',
    title: 'Dubai: Burj Khalifa Levels 124 & 125 Entry Ticket + Options',
    duration: '1.5 hours',
    certified: true,
    rating: 4.4,
    reviews: 85858,
    price: 159
  },
  {
    id: 2,
    image: '/grid-2.jpg',
    category: 'Water Activity',
    title: 'Dubai Marina: Luxury Yacht Tour with Breakfast or BBQ Option',
    duration: '1–3 hours • Optional audio guide',
    certified: false,
    rating: 4.8,
    reviews: 19666,
    oldPrice: 132,
    price: 74
  },
  {
    id: 3,
    image: '/grid-3.jpeg',
    category: 'Water Activity',
    title: 'Dubai: The Luxury Yacht Tour with Live BBQ Option and Drinks',
    duration: '1–3 hours • Small group • Optional audio guide',
    certified: false,
    rating: 4.7,
    reviews: 15563,
    oldPrice: 129,
    price: 72
  },
  {
    id: 4,
    image: '/grid-4.jpeg',
    category: 'Water Activity',
    title: 'Dubai: Jetski to Burj Arab–Atlantis w/ Pic, Video & Icecream',
    duration: '30 minutes – 1 hour',
    certified: true,
    rating: 4.9,
    reviews: 17798,
    oldPrice: 204,
    price: 149
  },
    {
     id: 5,
    image: '/grid-5.png',
    category: 'Water Activity',
    title: 'Dubai: Jetski to Burj Arab–Atlantis w/ Pic, Video & Icecream',
    duration: '30 minutes – 1 hour',
    certified: true,
    rating: 4.9,
    reviews: 17798,
    oldPrice: 204,
    price: 149
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



