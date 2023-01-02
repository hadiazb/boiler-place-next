import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pokemon } from '../../interfaces/pokemon'

export interface PokemonsState {
    pokemons: Pokemon[]
    favorites: Pokemon[]
}

const initialState: PokemonsState = {
    pokemons: [],
    favorites: [],
}

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
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
export const { addPokemon, deletePokemon } = pokemonsSlice.actions

// Reducers
export default pokemonsSlice.reducer
