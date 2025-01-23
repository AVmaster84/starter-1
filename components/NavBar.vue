<script setup lang="ts">
const links = [{
  label: 'Logo',
  useImage: {
    src: 'assets/image/Công ty TNHH Đông Nam Khánh.png'
  },
  // badge: 100
}, {
  label: 'Linh kiện PC',
  icon: 'i-heroicons-home',
  to: '/getting-started/installation'
}, {
  label: 'Laptop',
  icon: 'i-heroicons-chart-bar',
  to: '/components/horizontal-navigation'
}, {
  label: 'Gaming Gear',
  icon: 'i-heroicons-command-line',
  to: '/components/command-palette'
}]
</script>

<template>
  <UHorizontalNavigation :links="links" class="text-3xl scale-110 border-b border-gray-200 dark:border-gray-800 min-sm:hidden" />
</template>