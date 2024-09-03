<script lang="ts" setup>
const currenciesName = ["USD", "EUR", "RUB"]
</script>

<template>
  <section class="convert flex-center">
    <form class="flex-column">
      <div class="convert_item align-center">
        <div class="convert_item__drop">
          <span>{{ currenciesName[0] }}</span>
          <ul class="flex-column">
            <li v-for="name in currenciesName" :key="`currenciesName__${name}`">
              <span>{{ name }}</span>
            </li>
          </ul>
        </div>
        <input class="convert_item__val" type="number">
      </div>
      <div class="convert_item align-center">
        <div class="convert_item__drop">
          <span>{{ currenciesName[0] }}</span>
          <ul class="flex-column">
            <li v-for="name in currenciesName" :key="`currenciesName__${name}`">
              <span>{{ name }}</span>
            </li>
          </ul>
        </div>
        <input class="convert_item__val" type="number">
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>

.convert {
  padding: 3rem 0;

  form {
    gap: 3rem;
  }

  &_item {
    gap: 2rem;

    span, input {
      font-size: 1.6rem;
    }

    span {
      cursor: pointer;
    }

    &__drop {
      position: relative;

      ul {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        background: #fff;
        z-index: 1;
        gap: 1rem;
        padding: 1rem 0;
      }

      &:hover ul {
        display: flex;
      }
    }
  }
}

</style>

