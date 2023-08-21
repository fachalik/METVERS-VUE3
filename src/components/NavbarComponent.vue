<script setup lang="ts">
import styles from '@/utils/styles'
</script>

<template>
  <div :class="`${styles.xPaddings} py-8 relative`">
    <div class="absolute w-[50%] inset-0 gradient-01" />
    <div :class="`${styles.innerWidth} flex mx-auto justify-between gap-8`">
      <img src="../assets/search.svg" alt="searchSVG" class="w-[24px] h-[24px] object-contain" />
      <h2 class="font-extrabold text-[24px] leading-[30px] text-white">METAHERSE</h2>
      <img src="../assets/menu.svg" alt="menuSVG" class="w-[24px] h-[24px] object-contain" />
    </div>
  </div>
</template>
