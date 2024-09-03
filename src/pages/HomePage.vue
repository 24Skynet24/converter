<script lang="ts" setup>

import ExchangeCmp from "../components/ExchangeCmp.vue";
</script>

<template>
  <section class="home_section flex-center">
    <h1>exchange rate</h1>
    <ul>
      <li>
        <exchange-cmp :currencyName="'RUB'" :currencyVal="101"/>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">

.home_section {
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-top: 10rem;

  h1 {
    text-transform: uppercase;
    margin-bottom: 5rem;
    font-size: 3.2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
  }
}

</style>