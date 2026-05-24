<script setup lang="ts">
import type { HomageEntry } from '../../data/homages';
import { CATALOGUE } from '../../constants/ui-strings';
import WatchGrid from './WatchGrid.vue';

interface Props {
  entry: HomageEntry;
}

defineProps<Props>();

const emit = defineEmits<{
  viewClick: [id: string];
}>();
</script>

<template>
  <article class="bg-surface-deep border border-neutral-800/60 rounded-md overflow-hidden flex flex-col">
    <WatchGrid :icon-watch="entry.iconWatch" :homage-watch="entry.homageWatch" />

    <div class="flex flex-col items-center text-center px-4 pt-2 pb-1">
      <h3 class="font-serif tracking-wider text-base text-neutral-200 uppercase leading-tight">
        {{ entry.styleName }}
      </h3>

      <p class="text-mini font-sans text-neutral-400 tracking-wide uppercase mt-1">
        {{ entry.brands }}
      </p>

      <p class="text-xs font-medium tracking-wider text-amber-500/70 my-2">
        {{ entry.priceRange }}
      </p>
    </div>

    <button
      class="mt-auto w-full py-2 bg-neutral-900 border-t border-neutral-800 text-neutral-300 text-micro font-semibold tracking-widest uppercase hover:bg-amber-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-1.5"
      @click="emit('viewClick', entry.id)"
    >
      <span>{{ CATALOGUE.cardCtaLabel }}</span>
      <span>{{ CATALOGUE.cardCtaArrow }}</span>
    </button>
  </article>
</template>
