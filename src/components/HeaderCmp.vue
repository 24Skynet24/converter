<script lang="ts" setup>
import {currencyStore} from "../store/index"
const useStore = currencyStore()
const names = useStore.currenciesName

</script>

<template>
  <header class="flex-center">
    <router-link to="/" exact active-class="link">Главная</router-link>
    <router-link to="/convert" exact active-class="link">Конвертация</router-link>
    <div class="dropdown">
      <span>{{ useStore.getCurrentCurrency }}</span>
      <ul class="flex-column">
        <li v-for="(item, id) in names" :key="`currencyName_${id}`">
          <span @click="useStore.setActiveCurrency(id)">{{ item }}</span>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">

header {
  gap: 5rem;
  padding: 2rem 0;

  a {
    font-size: 1.8rem;
    transition: .2s color;

    &:hover {
      color: #4941e3;
    }
  }

  .link {
    color: #4941e3;
  }

  .dropdown {
    position: relative;

    span {
      font-size: 1.6rem;
      text-transform: uppercase;
      cursor: pointer;
    }

    ul {
      display: none;
      background: #ffffff;
      z-index: 1;
      gap: 1rem;
      padding-top: 1rem;
      position: absolute;
      left: 0;
      top: 100%;
    }

    &:hover ul {
      display: flex;
    }
  }
}

</style>