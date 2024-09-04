<script lang="ts" setup>
import {ref} from "vue"
import {currencyStore} from "../store/index"

const useStore = currencyStore()
const currencyList = useStore.currencyList
const currenciesName = ["usd", "eur", "rub"]
const firstItem = ref({
  activeCurrency: 0,
  value: "",
})
const secondItem = ref({
  activeCurrency: 1,
  value: "",
})

const changeCurrencyValue = (order = true) => {
  const key = Object.keys(currencyList).filter(item => {
    const [name1, name2] = item.split("-")
    return name1 === currenciesName[firstItem.value.activeCurrency] && name2 === currenciesName[secondItem.value.activeCurrency]
  })[0]

  if (order) secondItem.value.value = (+firstItem.value.value * currencyList[key]).toFixed(2) + ""
  else firstItem.value.value = (+secondItem.value.value / currencyList[key]).toFixed(2) + ""
}

const changeCurrency = (id, order = true): void => {
  if (order) {
    if (secondItem.value.activeCurrency === id) return
    firstItem.value.activeCurrency = id
  }
  else {
    if (firstItem.value.activeCurrency === id) return
    secondItem.value.activeCurrency = id
  }
  changeCurrencyValue(order)
}
const changeValue = (value, order = true): void => {
  if (order) {
    secondItem.value.value = value
  }
  else {
    firstItem.value.value = value
  }
  changeCurrencyValue(order)
}

</script>

<template>
  <section class="convert flex-center">
    <form class="flex-column">
      <div class="convert_item align-center">
        <div class="convert_item__drop">
          <span>{{ currenciesName[firstItem.activeCurrency] }}</span>
          <ul class="flex-column">
            <li v-for="(name, id) in currenciesName" :key="`currenciesName__${name}`" @click="changeCurrency(id)">
              <span>{{ name }}</span>
            </li>
          </ul>
        </div>
        <input class="convert_item__val" type="number" v-model="firstItem.value" @input="changeValue($event.target.value)">
      </div>
      <div class="convert_item align-center">
        <div class="convert_item__drop">
          <span>{{ currenciesName[secondItem.activeCurrency] }}</span>
          <ul class="flex-column">
            <li v-for="(name, id) in currenciesName" :key="`currenciesName__${name}`" @click="changeCurrency(id, false)">
              <span>{{ name }}</span>
            </li>
          </ul>
        </div>
        <input class="convert_item__val" type="number" v-model="secondItem.value" @input="changeValue($event.target.value, false)">
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
      text-transform: uppercase;
    }

    input {
      padding: .5rem 1rem;
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

