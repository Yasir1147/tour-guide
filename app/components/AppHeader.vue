<template>
  <header class="w-full bg-white shadow-sm">
    <div
      class="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8"
    >
      <!-- Left: Logo -->
      <div class="flex items-center space-x-2">
        <img
          src="/logo.svg"
          alt="GetYourGuide"
          class="h-8 w-auto"
        />
      </div>

      <!-- Center: Search bar -->
      <div
        class="hidden md:flex items-center w-full max-w-xl bg-white border rounded-full shadow-md overflow-hidden"
      >
        <input
          type="text"
          placeholder="Find places and things to do"
          class="flex-1 px-4 py-2 text-sm focus:outline-none"
        />
        <UButton
          color="primary"
          class="rounded-full px-6 py-2 font-semibold text-white"
        >
          Search
        </UButton>
      </div>

      <!-- Right: Icons & Links -->
      <div class="flex items-center space-x-6 text-sm font-medium text-gray-700">
        <a href="#" class="hover:text-blue-600">Become a supplier</a>

        <div class="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
          <UIcon name="i-heroicons-heart" class="h-5 w-5" />
          <span>Wishlist</span>
        </div>

        <div class="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
          <UIcon name="i-heroicons-shopping-cart" class="h-5 w-5" />
          <span>Cart</span>
        </div>

        <div class="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
          <UIcon name="i-heroicons-globe-alt" class="h-5 w-5" />
          <span>EN/AED</span>
        </div>

        <div class="relative flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
          <UIcon name="i-heroicons-user-circle" class="h-5 w-5" />
          <span>Profile</span>

          <!-- Notification Badge -->
          <span
            class="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
          >
            1
          </span>
        </div>
      </div>
    </div>

    <!-- Mobile Search (visible only on small screens) -->
    <div class="flex md:hidden items-center justify-center px-4 pb-3">
      <div
        class="flex items-center w-full max-w-md bg-white border rounded-full shadow-md overflow-hidden"
      >
        <input
          type="text"
          placeholder="Find places and things to do"
          class="flex-1 px-4 py-2 text-sm focus:outline-none"
        />
        <UButton
          color="primary"
          class="rounded-full px-6 py-2 font-semibold text-white"
        >
          Search
        </UButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// No script logic needed yet — all UI
</script>

<style scoped>
/* Optional small styling improvements */
</style>
