<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-[20px] font-bold">Itinerary</h2>
      <!-- optional: 'See more guide reviews' link slot etc -->
    </div>

    <!-- ✅ 2-column layout like GYG -->
   <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <!-- Left: timeline ONLY -->
      <ItinerarySection />

      <!-- Right: Google map -->
       <div class="w-full h-[420px] rounded-xl overflow-hidden">
        <iframe
          src="/map.png"
          width="100%"
          height="100%"
          loading="lazy"
          allowfullscreen
          class="rounded-xl"
        ></iframe>

        <!-- small caption like 'Main stop' -->
        <div class="text-[12px] text-gray-600 mt-2 flex items-center gap-1">
          <Icon name="i-heroicons-map-pin" class="w-4 h-4" />
          Main stop
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
