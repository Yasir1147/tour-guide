<template>
  <div class="mt-10">
    <h2 class="text-xl font-bold mb-5">About this activity</h2>

    <div class="flex flex-col gap-6">
      <div
        v-for="(item, i) in activities"
        :key="i"
        class="flex gap-4 items-start"
      >
        <div
          class="flex justify-center items-center w-9 h-9 rounded-full bg-blue-50 text-blue-700 flex-shrink-0"
        >
          <Icon :name="item.icon" class="w-5 h-5" />
        </div>
        <div>
          <p class="font-medium text-gray-800">{{ item.title }}</p>
          <p class="text-sm text-gray-600 leading-snug">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activities = [
  {
    icon: 'i-heroicons-check-badge',
    title: 'Free cancellation',
    description: 'Cancel up to 24 hours in advance for a full refund'
  },
  {
    icon: 'i-heroicons-credit-card',
    title: 'Reserve now & pay later',
    description:
      'Keep your travel plans flexible — book your spot and pay nothing today.'
  },
  {
    icon: 'i-heroicons-clock',
    title: 'Duration 4 - 7 hours',
    description: 'Check availability to see starting times'
  },
  {
    icon: 'i-heroicons-user-group',
    title: 'Live tour guide',
    description: 'English'
  },
  {
    icon: 'i-heroicons-truck',
    title: 'Pickup included',
    description:
      'Pickup is available from Dubai, Sharjah, and Ajman city hotels and apartments, as well as from Dubai Cruise Terminal (Port Rashid and Dubai Harbor). Meet your guide 45 minutes before your scheduled time.'
  }
]
</script>
