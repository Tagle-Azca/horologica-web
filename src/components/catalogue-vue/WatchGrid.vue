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

const cellClass =
  'w-full h-full object-cover rounded-md border border-neutral-800/40 shadow-lg';
</script>

<template>
  <div class="grid grid-cols-2 gap-4 w-full h-48 content-center px-4 pt-4 pb-2">
    <img
      v-if="!iconFailed"
      :src="iconWatch.src"
      :alt="iconWatch.alt"
      :class="cellClass"
      @error="iconFailed = true"
    />
    <WatchPlaceholder v-else :class-name="cellClass" />

    <img
      v-if="!homageFailed"
      :src="homageWatch.src"
      :alt="homageWatch.alt"
      :class="cellClass"
      @error="homageFailed = true"
    />
    <WatchPlaceholder v-else :class-name="cellClass" />
  </div>
</template>
