

function getAssets() {
    return fetch(`https://api.coincap.io/v2/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
    getAssets
}