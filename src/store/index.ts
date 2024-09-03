import {defineStore} from "pinia"

export const currencyStore = defineStore({
    id: "currency",
    state: () => ({
        currenciesName: ["usd", "rub", "eur"] as string[],
        activeCurrency: 0 as number,
    }),
    getters: {},
    actions: {
        setActiveCurrency(id) {
            this.activeCurrency = id
        }
    }
})