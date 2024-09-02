<script setup lang="ts">

import HeaderCmp from "./components/HeaderCmp.vue";
</script>

<template>
  <div>
    <header-cmp/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>

</style>
