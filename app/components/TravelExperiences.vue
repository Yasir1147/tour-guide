<template>
  <section class="w-full bg-white py-10">
    <div class="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20">
      <!-- Heading -->
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        Unforgettable travel experiences
      </h2>

      <!-- Cards Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="item in experiences"
          :key="item.id"
          class="bg-white border border-gray-200  overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
        >
          <!-- Image Section -->
          <div class="relative">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-[160px] object-cover"
            />
             <div
                class="bg-[#d73c3c] text-white rounded-b-lg px-2 py-1  text-sm font-semibold flex justify-between items-center"
              >
              </div>
            <!-- Heart Button -->
            <UButton
              icon="i-heroicons-heart"
              color="white"
              variant="soft"
              class="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2"
            />
            <!-- Badge -->
            <div
              class="absolute top-3 left-3 bg-[#d73c3c] text-white text-[11px] font-medium px-3 py-1 rounded"
            >
              Originals by Tourism
            </div>
          </div>

          <!-- Content Section -->
          <div class="p-4 flex flex-col justify-between h-[200px]">
            <div>
              <p
                class="text-[13px] uppercase tracking-wide font-extrabold text-gray-600 "
              >
                {{ item.category }}
              </p>
              <h3
                class="font-semibold text-[15px] text-gray-800 leading-tight line-clamp-2"
              >
                {{ item.title }}
              </h3>
              <p class="text-gray-500 text-sm mt-1 font-semibold">
                {{ item.duration }}
              </p>
              <div
                v-if="item.certified"
                class="flex items-center gap-1  text-gray-700 mt-1"
              >
                <UIcon name="i-heroicons-check-badge" class="" />
                <span class="text-green-700 font-semibold text-sm">Certified by Toursim</span>
                
              </div>
            </div>

            <!-- Rating + Price -->
            <div class="mt-3">
              <div class="flex items-center gap-1 text-[13px]">
                <div class="flex text-[#1a1a1a]">
                <UIcon
                  v-for="n in 5"
                  :key="n"
                  name="i-heroicons-star-solid"
                  class="text-black/80"
                />
              </div>
                <span class="text-sm text-gray-700">
                  {{ item.rating }} ({{ item.reviews.toLocaleString() }})
                </span>
              </div>

              <div
                class=" text-gray-800 rounded-b-lg px-3 py-1 mt-3 text-sm font-semibold flex justify-between items-center"
              >
                <span>From {{ item.price }} د.إ</span>
                <span v-if="item.group" class="text-xs font-normal">{{
                  item.group
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

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
  }, {
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
