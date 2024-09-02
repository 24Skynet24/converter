<script lang="ts" setup>

</script>

<template>
  <header class="flex-center">
    <router-link to="/" exact>Главная</router-link>
    <router-link to="/convert" exact>Конвертация</router-link>
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
}

</style>