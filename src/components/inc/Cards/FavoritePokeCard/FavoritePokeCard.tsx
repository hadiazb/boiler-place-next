import Image from 'next/image'

// base components
import { Typography, DefaultButton as Button } from '../..'

// styles
import { StyledPokemons, StyledPokemonDefault, StyledCardCtr } from './favoritePokeCard-styles'

// models
import { Pokemon } from '../../../../interfaces/pokemon'

export interface PokemonCardProps {
    favorites: Pokemon[]
    onButtonClick: (pokemon: Pokemon) => void
    onNavigate: (pokemon: Pokemon) => void
}

const FavoritePokeCard: React.FC<PokemonCardProps> = ({ favorites, onButtonClick, onNavigate }) => {
    return (
        <StyledPokemons>
            {favorites.map((poke) => (
                <StyledCardCtr key={poke.id}>
                    <StyledPokemonDefault onClick={() => onNavigate(poke)}>
                        <Typography variant="h3" typeFont="primary">
                            {poke.name.toUpperCase()}
                        </Typography>
                        <Image
                            src={poke.sprites.other?.dream_world.front_default ?? ''}
                            alt="Pokemon"
                            width={100}
                            height={100}
                        />
                    </StyledPokemonDefault>
                    <Button
                        handleClick={() => onButtonClick(poke)}
                        text="Delete favorites"
                        styledType="danger"
                        disabled
                        type="button"
                    />
                </StyledCardCtr>
            ))}
        </StyledPokemons>
    )
}

export default FavoritePokeCard
