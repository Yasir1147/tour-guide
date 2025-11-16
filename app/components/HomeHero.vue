<template>
  <!-- ✅ HERO SECTION -->
  <section
    class="relative bg-cover bg-center text-white pb-56  h-[70vh] md:h-[550px]"
    style="background-image: url('/hero-bg.jpg'); "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>

    <!-- Content -->
    <UContainer class="relative z-10 text-center pt-24">
      <h1 class="text-5xl md:text-6xl font-extrabold mb-8">
        Discover & book things to do
      </h1>

      <!-- Search Bar -->
      <div
        class="bg-white rounded-full shadow-xl w-full md:w-2/3 mx-auto flex items-center p-2"
      >
        <UInput
           class="flex-1"
          placeholder="Find places and things to do "
          size="md"
          :ui="{
    base: 'bg-white border-none ring-0 shadow-none focus:ring-0 focus:border-none',
    wrapper: 'bg-white rounded-full'
  }"
        />
        <UButton
          color="primary"
          size="lg"
          label="Search"
          class="rounded-full px-6"
        />
      </div>
    </UContainer>

    <!-- ✅ Cards inside hero (floating) -->
    <UContainer class="relative z-20 md:mt-15 ">
  <section class="w-full flex flex-col items-center mt-10">
  <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">
    Continue planning your trip
  </h2>

  <div class="relative w-full max-w-[1300px] overflow-hidden px-4">
    <div
      class="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
      style="scroll-padding: 0 1rem;"
    >
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="flex-shrink-0 snap-start first:ml-[3rem] last:mr-[3rem]"
      >
        <HomeCard :card="card" />
      </div>
    </div>
  </div>
</section>

</UContainer>
  </section>
</template>

<script setup>
const cards = [
  {
    title: 'Dubai: Burj Khalifa Levels 124 & 125 Entry',
    image: '/cards/1.jpeg',
    duration: '1.5 hours',
    rating: '4.4',
    reviews: '85,731',
    price: '159',
  },
  {
    title: 'Dubai: Jetski to Burj Arab-Atlantis',
    image: '/cards/2.jpg',
    duration: '30 mins - 1 hour',
    rating: '4.9',
    reviews: '17,669',
    price: '149',
  },
  {
    title: 'Dubai Marina: Luxury Yacht Tour',
    image: '/cards/3.jpg',
    duration: '1 - 3 hours',
    rating: '4.8',
    reviews: '19,641',
    price: '74',
  },
  {
    title: 'Desert Safari Adventure',
    image: '/cards/2.jpg',
    duration: '4 - 5 hours',
    rating: '4.7',
    reviews: '23,410',
    price: '199',
  },
]
</script>
