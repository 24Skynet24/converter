<script lang="ts" setup>
import ExchangeCmp from "../components/ExchangeCmp.vue"
import Currency from "../services/Currency"
import {currencyStore} from "../store/index"
import {onBeforeMount, ref} from "vue"

let currentList = ref([])
const useStore = currencyStore()
const getExCurrencyName = (name: string): string => {
  const [_, n2] = name.split("-")
  return n2
}
const setCurrentCurrencyList = async (): Promise<void> => {
  const currencyList = await Currency.getCurrency()
  await useStore.setCurrencyList(currencyList)
  currentList.value = useStore.getCurrentList
}

onBeforeMount(async (): Promise<void> => {
  await setCurrentCurrencyList()
})
useStore.$subscribe(async () => {
  await setCurrentCurrencyList()
})
</script>

<template>
  <section class="home_section flex-center flex-column">
    <h1>exchange rate</h1>
    <ul class="flex-column">
      <li v-for="(item, id) in currentList" :key="`currency_current_${id}`">
        <exchange-cmp :currencyVal="Object.values(item)[0]" :currencyName="getExCurrencyName(Object.keys(item)[0])"/>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">

.home_section {
  width: 100%;
  height: 100%;
  padding-top: 10rem;

  h1 {
    text-transform: uppercase;
    margin-bottom: 5rem;
    font-size: 3.2rem;
  }

  ul {
    gap: 2rem;
  }
}

</style>