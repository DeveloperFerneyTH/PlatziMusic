import config from './config'

const { apiKey } = config
const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`

export default function getArtists(country) {
    const newUrl = url.replace(':country', country)
    return fetch(newUrl)
        .then(res => res.json())
        .then(json => json.topartists.artist)
}