<template>
  <header class="w-full bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <!-- Top small line -->
      <div class="flex items-center gap-2 text-[12px] text-gray-500 mb-1">
        <span
          class="inline-flex items-center gap-1 px-2 py-[2px] rounded-full border border-gray-300"
        >
          <span class="w-2 h-2 rounded-full bg-green-500"></span>
          Certified by Torusim
        </span>
      </div>

      <!-- Title + right actions -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <!-- Left: title + meta -->
        <div>
          <h1 class="text-2xl md:text-[28px] font-bold text-slate-900 leading-snug">
            Dubai: Desert Safari, Quad Bike, Camel Ride &amp; Al Khayma Camp
          </h1>

          <div class="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <!-- Tag -->
            <span
              class="inline-flex items-center rounded-full bg-blue-900 text-white px-2 py-[2px] text-[11px] font-semibold"
            >
              Top rated
            </span>

            <!-- Stars + rating -->
            <div class="flex items-center gap-1">
              <span class="text-yellow-400">★★★★★</span>
              <span class="font-semibold">4.9</span>
            </div>

            <!-- Reviews -->
            <button class="text-blue-700 font-semibold hover:underline">
              61,417 reviews
            </button>

            <!-- Separator dot -->
            <span class="text-gray-300">•</span>

            <!-- Provider -->
            <span class="text-gray-600">
              Activity provider:
              <span class="font-semibold">OceanAir Travels</span>
            </span>
          </div>
        </div>

        <!-- Right: wishlist / share -->
        <div class="flex items-center gap-4 text-sm text-blue-700">
          <button class="flex items-center gap-1 hover:underline">
            <Icon name="i-heroicons-heart" class="w-4 h-4" />
            <span>Add to wishlist</span>
          </button>
          <button class="flex items-center gap-1 hover:underline">
            <Icon name="i-heroicons-share" class="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// nothing needed here for now
</script>
