<template>
  <div class="max-w-7xl mx-auto px-6 py-10 space-y-12">
    <YachtHeader />
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div class="lg:col-span-2">
        
        <YachtLeft />
      </div>
      <YachtRight />
    </div>

    <AboutActivity />

    <!-- ✅ Fixed: now Itinerary + Map side by side -->
    <ItineraryWrapper />
     <TourDetailsSection />
  </div>
</template>


<script setup>

</script>
