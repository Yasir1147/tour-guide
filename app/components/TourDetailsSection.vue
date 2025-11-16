<template>
  <section class="mt-12 border-t border-gray-200 pt-6 text-[14px]">
    <div class="divide-y divide-gray-200">
      <!-- Highlights -->
      <div class="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 py-4">
        <h3 class="font-semibold text-gray-900">Highlights</h3>
        <ul class="space-y-1">
          <li v-for="(item, i) in highlights" :key="i" class="flex gap-2">
            <span class="mt-[6px] w-1 h-1 rounded-full bg-gray-700"></span>
            <span class="text-gray-800 leading-snug">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Full description -->
      <div class="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 py-4">
        <h3 class="font-semibold text-gray-900">Full description</h3>
        <div class="space-y-2 text-gray-800 leading-relaxed">
          <p>
            Discover the desert outside of Dubai on a guided red dunes desert safari.
            Enjoy the opportunity to take part in a variety of activities, including
            thrilling dune bashing, sandboarding, photo stops, and an optional BBQ dinner.
          </p>
          <p>
            After pickup, head out into the desert and feel the excitement of driving
            across the dunes in a 4×4 vehicle. Try sandboarding down the slopes, take
            photos at scenic spots, and relax at a traditional desert camp with refreshments.
          </p>
          <button class="text-blue-700 font-semibold text-[13px] hover:underline">
            See more
          </button>
        </div>
      </div>

      <!-- Includes -->
      <div class="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 py-4">
        <h3 class="font-semibold text-gray-900">Includes</h3>
        <ul class="space-y-1">
          <li
            v-for="(item, i) in includes"
            :key="i"
            class="flex gap-2 items-start"
          >
            <span class="text-green-600 mt-[2px]">✔</span>
            <span class="text-gray-800 leading-snug">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Not suitable for -->
      <div class="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 py-4">
        <h3 class="font-semibold text-gray-900">Not suitable for</h3>
        <ul class="space-y-1">
          <li v-for="(item, i) in notSuitable" :key="i" class="flex gap-2">
            <span class="mt-[6px] w-1 h-1 rounded-full bg-gray-700"></span>
            <span class="text-gray-800 leading-snug">{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- Important information -->
      <div class="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 py-4">
        <h3 class="font-semibold text-gray-900">Important information</h3>

        <div class="space-y-4 text-gray-800">
          <div>
            <p class="font-semibold mb-1">What to bring</p>
            <ul class="space-y-1">
              <li v-for="(item, i) in whatToBring" :key="i" class="flex gap-2">
                <span class="mt-[6px] w-1 h-1 rounded-full bg-gray-700"></span>
                <span class="leading-snug">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-semibold mb-1">Not allowed</p>
            <ul class="space-y-1">
              <li v-for="(item, i) in notAllowed" :key="i" class="flex gap-2">
                <span class="mt-[6px] w-1 h-1 rounded-full bg-gray-700"></span>
                <span class="leading-snug">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-semibold mb-1">Know before you go</p>
            <p class="leading-snug text-gray-700">
              Dune bashing is a thrilling activity taken at your own risk. The
              activity provider is not responsible for any injury, loss, or
              damage. Travel insurance is recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlights = [
  'Enjoy a breathtaking session of dune bashing at the Red Dunes.',
  'Slide along the dunes by trying out the sport of sandboarding.',
  'Get an amazing view of the desert from a camel’s back.',
  'Capture the desert’s beauty with different photo stops.'
]

const includes = [
  'Pickup and drop-off from your hotel or selected location',
  'Shared transportation in an air-conditioned 4×4',
  'English-speaking licensed driver',
  'Unlimited water and soft drinks',
  'Dune bashing for 30–45 minutes',
  'Quad bike ride (if option selected)',
  'Sandboarding',
  'Short camel ride (can be repeated)',
  'Tea/coffee with dates and unlimited soft drinks'
]

const notSuitable = [
  'Children under 3 years',
  'Pregnant women',
  'People with back problems',
  'People with heart problems'
]

const whatToBring = ['Comfortable shoes', 'Sun hat', 'Sunglasses', 'Sunscreen']
const notAllowed = ['Luggage or large bags']
</script>
