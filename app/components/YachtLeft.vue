<template>
  <div class="flex flex-col gap-4">
    <div class="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-stretch">
      <!-- LEFT: YouTube thumbnail with play icon -->
      <div
        class="relative rounded-2xl overflow-hidden cursor-pointer h-[360px] md:h-[420px]"
        @click="openLightbox(0)"
      >
        <img
          :src="youtubeThumb(mediaItems[0].src)"
          alt="Tour video"
          class="w-full h-full object-cover"
        />

        <!-- dark overlay + play button -->
        <div class="absolute inset-0 bg-black/30 flex flex-col items-center justify-center gap-3">
          <div
            class="flex items-center justify-center w-16 h-16 rounded-full bg-black/70 text-white border border-white/40"
          >
            <span class="text-2xl">▶</span>
          </div>
          <p class="text-sm text-white font-medium drop-shadow">
            Watch tour video
          </p>
        </div>
      </div>

      <!-- RIGHT: big image with +count (same jaisa pehle) -->
      <div class="relative">
        <img
          :src="mediaItems[1].src"
          class="w-full h-[360px] md:h-[420px] rounded-2xl object-cover cursor-pointer"
          @click="openLightbox(1)"
        />
        <button
          class="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 text-white text-sm"
          @click="openLightbox(1)"
        >
          +{{ mediaItems.length - 1 }}
        </button>
      </div>
    </div>

    <!-- description as before... -->

    <!-- LIGHTBOX (same as pichla version) -->
    <transition name="fade">
      <div
        v-if="showLightbox"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      >
        <button class="absolute top-6 right-8 text-white text-2xl" @click="closeLightbox">
          ✕
        </button>
        <button class="absolute left-4 md:left-10 text-white text-3xl" @click="prevItem">
          ‹
        </button>
        <button class="absolute right-4 md:right-10 text-white text-3xl" @click="nextItem">
          ›
        </button>

        <div class="w-full max-w-5xl px-4">
          <div class="relative w-full aspect-[16/9] bg-black rounded-2xl overflow-hidden">
            <!-- If YouTube -->
            <iframe
              v-if="currentItem.type === 'youtube'"
              :src="youtubeEmbed(currentItem.src)"
              class="absolute inset-0 w-full h-full"
              frameborder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
            ></iframe>

            <!-- If image -->
            <img
              v-else
              :src="currentItem.src"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div class="mt-3 text-center text-sm text-white/80">
            {{ activeIndex + 1 }} / {{ mediaItems.length }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>



<script setup>
import { ref, computed } from 'vue'

const showLightbox = ref(false)
const activeIndex = ref(0)

const mediaItems = [
  {
    type: 'youtube',
    src: 'https://www.youtube.com/shorts/E646JDHSpPU'
  },
  {
    type: 'image',
    src: '/yacht-main.jpeg'
  },
  {
    type: 'image',
    src: '/yacht-2.jpeg'
  },
  {
    type: 'image',
    src: '/yacht-3.jpeg'
  }
]

const currentItem = computed(() => mediaItems[activeIndex.value])

const openLightbox = (index) => {
  activeIndex.value = index
  showLightbox.value = true
}
const closeLightbox = () => (showLightbox.value = false)
const nextItem = () => (activeIndex.value = (activeIndex.value + 1) % mediaItems.length)
const prevItem = () =>
  (activeIndex.value = (activeIndex.value - 1 + mediaItems.length) % mediaItems.length)

// --- YouTube helpers ---
const youtubeId = (url) => {
  if (!url) return ''
  if (url.includes('/shorts/')) return url.split('/shorts/')[1].split(/[?&]/)[0]
  if (url.includes('watch?v=')) return url.split('v=')[1].split('&')[0]
  return ''
}

const youtubeEmbed = (url) => {
  const id = youtubeId(url)
  if (!id) return ''
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=1`
}

const youtubeThumb = (url) => {
  const id = youtubeId(url)
  if (!id) return ''
  // hqdefault = decent quality thumbnail
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}
</script>



<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
