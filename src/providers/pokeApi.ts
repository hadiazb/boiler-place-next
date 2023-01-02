import axios from 'axios'
import axiosRetry from 'axios-retry'

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    headers: {
        'Accept-Encoding': '*',
    },
})

axiosRetry(pokeApi, { retries: 3, retryDelay: axiosRetry.exponentialDelay })

export default pokeApi
