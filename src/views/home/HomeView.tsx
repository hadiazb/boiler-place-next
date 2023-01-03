// components
import { Typography, PokemonList } from '../../components'

// models

import { SmallPokemon } from '../../interfaces'

export interface HomeViewProps {
    pokemons: SmallPokemon[]
}

export default function HomeView({ pokemons }: HomeViewProps) {
    return (
        <>
            <Typography variant="h2" typeFont="secondary">
                Pokemons
            </Typography>
            <PokemonList pokemons={pokemons} />
        </>
    )
}
