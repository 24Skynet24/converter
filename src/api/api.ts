export default async (url) => {
    const baseUrl = "https://status.neuralgeneration.com/api" // env.variable
    try {
        const res = await fetch(baseUrl + url, {method: "GET"})
        return await res.json()
    }
    catch (e) {
        console.error("Error", e)
        return {error: e}
    }
}