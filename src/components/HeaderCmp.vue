<script lang="ts" setup>

</script>

<template>
  <header class="flex-center">
    <router-link to="/" exact active-class="link">Главная</router-link>
    <router-link to="/convert" exact active-class="link">Конвертация</router-link>
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
}

</style>