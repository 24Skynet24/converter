<script setup lang="ts">
import HeaderCmp from "./components/HeaderCmp.vue"
</script>

<template>
  <div class="content">
    <header-cmp/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style scoped>

</style>
