<template>
  <div>
    Route Name: {{ name }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const name = computed(() => route.name);
</script>
