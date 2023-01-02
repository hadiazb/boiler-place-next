import Image from 'next/image'
import { useRouter } from 'next/router'

// base components
import { Typography } from '../..'

// styles
import { StyledPokemonCard } from './pokemonCard-styles'

// models
import { SmallPokemon } from '../../../../interfaces'

export interface PokemonCardProps {
    pokemon: SmallPokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const router = useRouter()

    const onPokemonClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }

    return (
        <StyledPokemonCard key={pokemon.id} onClick={onPokemonClick}>
            <Typography variant="p" typeFont="secondary">
                #{pokemon.id}
            </Typography>
            <Image src={pokemon.img ?? ''} alt="Pokemon" width={100} height={100} />
            <Typography variant="p" typeFont="secondary">
                {pokemon.name.toLocaleUpperCase()}
            </Typography>
        </StyledPokemonCard>
    )
}

export default PokemonCard
