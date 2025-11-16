<template>
  <div>
   

    <div>
      <div
        v-for="(stop, index) in itinerary"
        :key="index"
        class="flex items-start"
      >
        <!-- LEFT: timeline column -->
        <div class="flex flex-col items-center mr-4">
          <!-- main circle -->
          <div
            :class="[
              'flex items-center justify-center rounded-full',
              index === 0 || index === itinerary.length - 1
                ? 'w-6 h-6 bg-red-500 text-white'            // top + bottom big red
                : stop.main
                  ? 'w-6 h-6 bg-white text-blue-700 border-[3px] border-blue-700' // main stops
                  : 'w-5 h-5 bg-gray-200 text-gray-500'       // normal/grey stops
            ]"
          >
            <Icon v-if="stop.icon" :name="stop.icon" class="w-3 h-3" />
          </div>

          <!-- dotted connector to next item -->
          <div
            v-if="index !== itinerary.length - 1"
            class="flex flex-col items-center"
          >
            <span
              v-for="n in 4"
              :key="n"
              class="w-1 h-1 rounded-full bg-red-400 my-[3px]"
            />
          </div>
        </div>

        <!-- RIGHT: text column -->
        <div class="pb-6">
          <p class="font-semibold text-[14px] text-gray-900">
            {{ stop.title }}
          </p>
          <p
            v-if="stop.description"
            class="text-[13px] leading-snug text-gray-600"
          >
            {{ stop.description }}
          </p>
          <p
            v-if="stop.note"
            class="text-[13px] italic text-gray-400"
          >
            {{ stop.note }}
          </p>
        </div>
      </div>
    </div>

    <p class="mt-1 text-xs text-gray-400">
      For reference only. Itineraries are subject to change.
    </p>
  </div>
</template>

<script setup>
const itinerary = [
  {
    icon: 'i-heroicons-building-storefront',
    title: '3 pickup location options:',
    description: 'Dubai, Sharjah, Ajman',
    main: true
  },
  {
    icon: 'i-heroicons-truck',
    title: 'Jeep / SUV',
    description: '(45 minutes)',
    main: false
  },
  {
    icon: 'i-heroicons-map-pin',
    title: 'Red Dunes Desert Safari, Dubai',
    description:
      'Photo stop, Sandboarding, Dune bashing, Welcome refreshments',
    main: true
  },
  {
    icon: 'i-heroicons-map-pin',
    title: 'Lahbab Desert',
    description: 'Quad bike ride',
    note: 'Optional, Extra fee',
    main: false
  },
  {
    icon: 'i-heroicons-building-storefront',
    title: 'Al Khayma Desert Camp',
    description: 'Photo stop, Coffee, Camel ride, Local snacks',
    main: true
  },
  {
    icon: 'i-heroicons-musical-note',
    title: 'Al Khayma Desert Camp',
    description: 'Camp activities, BBQ, Traditional dance show',
    main: true
  },
  {
    icon: 'i-heroicons-truck',
    title: 'Jeep / SUV',
    description: '(45 minutes)',
    main: false
  },
  {
    icon: 'i-heroicons-building-storefront',
    title: '3 drop-off locations:',
    description: 'Ajman, Sharjah, Dubai',
    main: true
  }
]
</script>
