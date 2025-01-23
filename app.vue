<script setup lang="ts">
const count = ref(1) // ref is auto-imported
</script>
<!-- <script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script> -->

<template>
  <main>
    <!-- <NuxtLayout> -->

      <!-- <header> -->
        <div>
          <!-- <dark-mode-toggle /> -->
          <NavBar />
          <!-- <Container /> -->
        </div>
      <!-- </header> -->
    <!-- </NuxtLayout> -->
  </main>
</template>
  