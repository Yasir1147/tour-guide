<template>
  <div class="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm">
    <!-- 💰 Price -->
    <div>
      <p class="text-gray-400 line-through text-sm">From 103 د.إ</p>
      <h2 class="text-2xl font-bold text-red-600">74 د.إ</h2>
      <p class="text-sm text-gray-600">per person</p>
    </div>

    <!-- 👥 Select group -->
    <div class="relative mt-4">
      <button
        class="w-full bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-between p-3 hover:bg-gray-200 transition"
        @click="toggleGroupDropdown"
      >
        <div class="flex items-center gap-2">
          <Icon name="i-heroicons-user" class="w-5 h-5 text-gray-700" />
          <span>{{ groupLabel }}</span>
        </div>
        <Icon name="i-heroicons-chevron-down" class="w-5 h-5 text-gray-700" />
      </button>

      <!-- Dropdown -->
      <div
        v-if="showGroupDropdown"
        class="absolute top-full mt-2 left-0 w-full bg-white rounded-lg shadow-lg p-4 z-10"
      >
        <div
          v-for="(option, index) in peopleOptions"
          :key="index"
          class="flex justify-between items-center border-b last:border-none py-2"
        >
          <div>
            <p class="font-medium text-gray-800">{{ option.label }}</p>
            <p class="text-xs text-gray-500">{{ option.age }}</p>
          </div>
          <div class="flex items-center gap-3">
            <button
              class="text-xl font-bold text-gray-500 hover:text-blue-600"
              @click="decreaseCount(option)"
            >
              –
            </button>
            <span class="w-5 text-center">{{ option.count }}</span>
            <button
              class="text-xl font-bold text-gray-500 hover:text-blue-600"
              @click="increaseCount(option)"
            >
              +
            </button>
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-2">
          Ages 2 and younger do not require a ticket.
        </p>
      </div>
    </div>

    <!-- 📅 Date Picker -->
    <div class="relative mt-4">
      <button
        class="w-full bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-between p-3 hover:bg-gray-200 transition"
        @click="showDatePicker = !showDatePicker"
      >
        <div class="flex items-center gap-2">
          <Icon name="i-heroicons-calendar" class="w-5 h-5 text-gray-700" />
          <span>{{ selectedDateLabel }}</span>
        </div>
        <Icon name="i-heroicons-chevron-down" class="w-5 h-5 text-gray-700" />
      </button>

      <div
        v-if="showDatePicker"
        class="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg p-4 z-20"
      >
        <DatePicker v-model="selectedDate" />
      </div>
    </div>

    <!-- ✅ Button -->
    <button
      class="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition"
    >
      Check availability
    </button>

    <!-- ℹ️ Info -->
    <div class="mt-6 space-y-3 text-sm text-gray-700">
      <div class="flex gap-2 items-start">
        <span class="text-green-600">✔</span>
        <p>
          <strong>Free cancellation</strong><br />
          Cancel up to 24 hours in advance for a full refund
        </p>
      </div>

      <div class="flex gap-2 items-start">
        <span class="text-green-600">✔</span>
        <p>
          <strong>Reserve now & pay later</strong><br />
          Keep your travel plans flexible — book your spot and pay nothing today.
          <a href="#" class="text-blue-600 underline">Read more</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { DatePicker } from 'v-calendar'   // ✅ correct for Vue 3
import 'v-calendar/dist/style.css'

const showGroupDropdown = ref(false)
const showDatePicker = ref(false)

const peopleOptions = ref([
  { label: 'Adult', age: 'Age 13–99', count: 1 },
  { label: 'Child', age: 'Age 3–12', count: 0 },
  { label: 'Infant', age: 'Age 2 and younger', count: 0 }
])

const selectedDate = ref(null)

const increaseCount = (option) => {
  option.count++
}
const decreaseCount = (option) => {
  if (option.count > 0) option.count--
}

const toggleGroupDropdown = () => {
  showGroupDropdown.value = !showGroupDropdown.value
}

const groupLabel = computed(() => {
  const total = peopleOptions.value.reduce((sum, o) => sum + o.count, 0)
  return total === 1 ? 'Adult x 1' : `Guests x ${total}`
})

const selectedDateLabel = computed(() =>
  selectedDate.value
    ? new Date(selectedDate.value).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    : 'Select date'
)
</script>
