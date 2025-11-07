<template>
  <div
    class="flex bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-[320px] overflow-hidden cursor-pointer p-2"
  >
    <!-- Left: Image -->
    <div class="flex-shrink-0 w-[110px] h-[110px]">
      <img
        :src="card.image"
        alt="activity"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>

    <!-- Right: Content -->
    <div class="flex flex-col justify-center px-4  text-left">
      <!-- Title -->
      <h3 class="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">
        {{ card.title }}
      </h3>

      <!-- Duration -->
      <p class="text-gray-600 text-xs mt-1">{{ card.duration }}</p>

      <!-- Rating -->
      <div class="flex items-center space-x-1 mt-1">
        <UIcon name="i-heroicons-star-solid" class="text-yellow-400 text-[13px]" />
        <span class="text-xs text-gray-700">
          {{ card.rating }} ({{ card.reviews.toLocaleString() }})
        </span>
      </div>

      <!-- Price -->
      <p class="text-red-600 font-semibold text-xs mt-1">
        From {{ card.price }} د.إ
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
