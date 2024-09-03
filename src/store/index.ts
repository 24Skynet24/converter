import {defineStore} from "pinia"

export const currencyStore = defineStore({
    id: "currency",
    state: () => ({
        currenciesName: ["usd", "rub", "eur"] as string[],
        activeCurrency: 0 as number,
        currencyListKeys: [] as [] | string[],
        currencyList: []
    }),
    getters: {
        getCurrentCurrency(state) {
            return state.currenciesName[state.activeCurrency]
        },
        getCurrentList(state) {
            const val = []
            const active = this.getCurrentCurrency
            const keys: string[] = state.currencyListKeys
            const list = state.currencyList

            const currentKeys = keys.filter(item => {
                const [name1, _] = item.split("-")
                return name1 === active
            })
            currentKeys.forEach(el => { val.push({[el]: list[el]})})
            return val
        },
    },
    actions: {
        setActiveCurrency(id) {
            this.activeCurrency = id
        },
        async setCurrencyList(list) {
            this.currencyList = list
            this.currencyListKeys = Object.keys(list).filter(item => {
                const currency = this.currenciesName
                const [currency1, currency2] = item.split('-')
                return currency.includes(currency1) && currency.includes(currency2)
            })
        },
    }
})