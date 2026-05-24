<script setup lang="ts">
import { homages } from '../../data/homages';
import CatalogueHeader from './CatalogueHeader.vue';
import HomageCard from './HomageCard.vue';

const emit = defineEmits<{
  viewClick: [id: string];
}>();
</script>

<template>
  <section class="bg-surface-base min-h-screen pb-16">
    <CatalogueHeader />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 max-w-7xl mx-auto">
      <HomageCard
        v-for="entry in homages"
        :key="entry.id"
        :entry="entry"
        @view-click="(id) => emit('viewClick', id)"
      />
    </div>
  </section>
</template>
