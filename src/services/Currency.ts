import api from "../api/api";

export default {
    getCurrency: async () => {
        try {
            return api("/currency")
        }
        catch (e) {
            console.error("Currency ERROR", e)
            throw e
        }
    }
}