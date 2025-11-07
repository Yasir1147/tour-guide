<template>
  <div
    class="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 w-[260px] cursor-pointer overflow-hidden flex flex-col"
  >
    <!-- Image Section -->
    <div class="relative h-[180px] w-full">
      <img
        :src="card.image"
        alt="activity"
        class="w-full h-full object-cover rounded-t-xl"
      />

      <!-- Badge -->
      <span
        class="absolute top-2 left-2 bg-gray-900 text-white text-[10px] font-semibold px-2 py-1 rounded"
      >
        Certified by GetYourGuide
      </span>

      <!-- Wishlist Button -->
      <button
        class="absolute top-2 right-2 bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow-sm hover:bg-gray-100"
      >
        <UIcon name="i-heroicons-heart" class="text-[16px]" />
      </button>
    </div>

    <!-- Content -->
    <div class="p-3 flex flex-col flex-grow">
      <p class="text-[10px] uppercase font-semibold text-gray-500 mb-1">
        {{ card.category }}
      </p>

      <h3 class="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">
        {{ card.title }}
      </h3>

      <p class="text-gray-600 text-xs mt-1">{{ card.duration }}</p>
      <p v-if="card.pickup" class="text-gray-600 text-xs">
        {{ card.pickup }}
      </p>

      <!-- Rating -->
      <div class="flex items-center space-x-1 mt-2">
        <UIcon name="i-heroicons-star-solid" class="text-yellow-400 text-sm" />
        <span class="text-xs text-gray-700">
          {{ card.rating }} ({{ card.reviews.toLocaleString() }})
        </span>
      </div>

      <!-- Price -->
      <p class="text-red-600 font-semibold text-xs mt-2">
        From <span class="text-sm">{{ card.price }}</span> د.إ
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
<script setup>


const activities = [
  {
    image: '1.jpg',
    category: 'Entry Ticket',
    title: 'Dubai: Burj Khalifa Levels 124 & 125 Entry Ticket + Options',
    duration: '1.5 hours',
    rating: 4.4,
    reviews: 85783,
    price: 159,
  },
  {
    image: '/images/safari.jpg',
    category: 'Adventure',
    title: 'Dubai: Desert Safari, Quad Bike, Camel Ride & Al Khayma Camp',
    duration: '4–7 hours',
    pickup: 'Pickup available',
    rating: 4.9,
    reviews: 60722,
    price: 122,
  },
  // ...add more
]
</script>