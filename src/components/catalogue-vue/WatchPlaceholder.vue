<script setup lang="ts">
import { getCurrentInstance } from 'vue';

interface Props {
  className?: string;
}

defineProps<Props>();

const uid = getCurrentInstance()?.uid ?? Math.random().toString(36).slice(2);
const gradId = `wph-vue-${uid}`;

const markers = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 - 90) * (Math.PI / 180);
  const isMain = i % 3 === 0;
  return {
    x1: 80 + (isMain ? 53 : 57) * Math.cos(angle),
    y1: 80 + (isMain ? 53 : 57) * Math.sin(angle),
    x2: 80 + (isMain ? 65 : 62) * Math.cos(angle),
    y2: 80 + (isMain ? 65 : 62) * Math.sin(angle),
    isMain,
  };
});
</script>

<template>
  <svg viewBox="0 0 160 160" :class="className" aria-hidden="true">
    <defs>
      <radialGradient :id="gradId" cx="38%" cy="32%">
        <stop offset="0%" stop-color="#282828" />
        <stop offset="100%" stop-color="#0e0e0e" />
      </radialGradient>
    </defs>

    <circle cx="80" cy="80" r="74" :fill="`url(#${gradId})`" stroke="#303030" stroke-width="1.5" />
    <circle cx="80" cy="80" r="64" fill="#060606" stroke="#1c1c1c" stroke-width="0.5" />

    <line
      v-for="(m, i) in markers"
      :key="i"
      :x1="m.x1" :y1="m.y1"
      :x2="m.x2" :y2="m.y2"
      :stroke="m.isMain ? '#b8903c' : '#282828'"
      :stroke-width="m.isMain ? 2.5 : 1.5"
      stroke-linecap="round"
    />

    <line x1="80" y1="80" x2="55" y2="63" stroke="#d0d0d0" stroke-width="4" stroke-linecap="round" />
    <line x1="80" y1="80" x2="120" y2="57" stroke="#d0d0d0" stroke-width="2.5" stroke-linecap="round" />

    <circle cx="80" cy="80" r="4" fill="#b8903c" />
    <circle cx="80" cy="80" r="1.5" fill="#060606" />
  </svg>
</template>
