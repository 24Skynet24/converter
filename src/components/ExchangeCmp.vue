<script setup lang="ts">
import {defineProps} from "vue"
import {currencyStore} from "../store/index"

defineProps<{
  currencyName: string
  currencyVal: number
}>()

const useStore = currencyStore()
</script>

<template>
  <article class="align-center">
    <span>1 {{ useStore.getCurrentCurrency }}</span>
    <span>=</span>
    <div class="align-center">
      <span>{{ currencyVal }}</span>
      <span>{{ currencyName }}</span>
    </div>
  </article>
</template>

<style lang="scss" scoped>

article {
  gap: 2rem;
  font-size: 1.8rem;

  div.align-center {
    gap: .5rem;
  }

  span {
    text-transform: uppercase;
  }
}

</style>