import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '../../interfaces/pokemon'

export interface PokemonsState {
    pokemons: Pokemon[]
    favorites: Pokemon[]
    isLoading: boolean
    error: string | null
}

const initialState: PokemonsState = {
    pokemons: [],
    favorites: [],
    isLoading: false,
    error: null,
}

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        isLoading: (state) => {
            state.isLoading = true
            state.error = null
            state.pokemons = state.pokemons
        },
        error: (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.pokemons = state.pokemons
            state.error = action.payload
        },
        getPokemons: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokemons = action.payload
        },
        addPokemon: (state, action: PayloadAction<Pokemon>) => {
            const duplicates = state.favorites.concat(action.payload)
            const ids = duplicates.map((poke) => poke.id)
            state.favorites = duplicates.filter(({ id }, index) => !ids.includes(id, index + 1))
        },
        deletePokemon: (state, action: PayloadAction<Pokemon>) => {
            state.favorites = state.favorites.filter((pokemon) => pokemon.id !== action.payload.id)
        },
    },
})

// Actions Creators
export const { addPokemon, deletePokemon, isLoading, error, getPokemons } = pokemonsSlice.actions

// Reducers
export default pokemonsSlice.reducer
