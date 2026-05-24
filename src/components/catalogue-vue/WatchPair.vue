<script setup lang="ts">
import { ref } from 'vue';
import type { WatchImage } from '../../data/homages';
import WatchPlaceholder from './WatchPlaceholder.vue';

interface Props {
  iconWatch: WatchImage;
  homageWatch: WatchImage;
}

defineProps<Props>();

const iconFailed = ref(false);
const homageFailed = ref(false);

const imgClass =
  'h-40 w-auto max-w-none object-contain flex-shrink-0 shadow-watch';
</script>

<template>
  <div class="flex justify-center items-center h-44 w-full relative my-2 -space-x-6 overflow-hidden">
    <img
      v-if="!iconFailed"
      :src="iconWatch.src"
      :alt="iconWatch.alt"
      :class="imgClass"
      @error="iconFailed = true"
    />
    <WatchPlaceholder v-else :class-name="imgClass" />

    <img
      v-if="!homageFailed"
      :src="homageWatch.src"
      :alt="homageWatch.alt"
      :class="imgClass"
      @error="homageFailed = true"
    />
    <WatchPlaceholder v-else :class-name="imgClass" />
  </div>
</template>
