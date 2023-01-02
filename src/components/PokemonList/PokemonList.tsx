import { ReactElement } from 'react'

// base components
import { PokemonCard } from '../inc'

// styles
import { StyledPokemonList } from './pokemonList-styles'

// models
import { SmallPokemon } from '../../interfaces'

export interface PokemonListProps {
    pokemons: SmallPokemon[]
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }): ReactElement => {
    return (
        <StyledPokemonList>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </StyledPokemonList>
    )
}

export default PokemonList
