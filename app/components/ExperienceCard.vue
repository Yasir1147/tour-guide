<template>
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
            <p class="text-[11px] uppercase text-blue-600 font-semibold">
              {{ item.category }}
            </p>
            <h3 class="font-semibold text-[15px] leading-tight line-clamp-2">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 text-xs">{{ item.duration }}</p>

            <!-- Certification -->
            <div
              v-if="item.certified"
              class="flex items-center gap-1 text-xs text-gray-600 mt-1"
            >
              <UIcon name="i-heroicons-check-badge" class="text-green-500" />
              Certified by GetYourGuide
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
                class="text-xs text-gray-400 line-through"
              >
                From {{ item.oldPrice }} د.إ
              </p>
              <p class="text-red-600 font-semibold text-sm">
                From {{ item.price }} د.إ
              </p>
            </div>
          </div>
        </div>
</template>

<script setup>
defineProps({
  image: String,
  category: String,
  title: String,
  duration: String,
  certified: Boolean,
  rating: Number,
  reviews: Number,
  price: Number,
  oldPrice: Number
})
</script>
