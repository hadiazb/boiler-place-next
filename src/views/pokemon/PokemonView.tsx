import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

// components
import { Typography, DefaultButton as Button } from '../../components'

// styles
import {
    StyledBtnCtr,
    StyledPokemonCard,
    StyledPokemonDefault,
    StyledPokemonPage,
    StyledPokemonSprite,
    StyledPokemonSprites,
    StyledSprites,
} from './pokemonView-styles'

// models
import { Pokemon } from '../../interfaces'
import { AppDispatch, RootState } from '../../store'

// store
import { addPokemon, deletePokemon } from '../../store/pokemons'

export interface PokemonViewProps {
    pokemon: Pokemon
}

export default function PokemonView({ pokemon }: PokemonViewProps) {
    const dispatch: AppDispatch = useDispatch()
    const { favorites } = useSelector((store: RootState) => store.pokemons)

    const existInFavorites = (): boolean =>
        favorites.filter((poke) => poke.id === pokemon.id).length ? true : false

    const onAddOrDeletePokemonFavorite = () => {
        if (existInFavorites()) {
            return dispatch(deletePokemon(pokemon))
        }
        return dispatch(addPokemon(pokemon))
    }
    return (
        <StyledPokemonPage>
            <StyledPokemonCard>
                <StyledPokemonDefault>
                    <Typography variant="h1" typeFont="secondary">
                        {pokemon.name.toLocaleUpperCase()}
                    </Typography>
                    <Image
                        src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                        alt="Pokemon"
                        width={250}
                        height={250}
                    />
                </StyledPokemonDefault>
                <StyledSprites>
                    <Typography variant="h2" typeFont="secondary">
                        SPRITES
                    </Typography>
                    <StyledPokemonSprites>
                        <StyledPokemonSprite>
                            <Image
                                src={pokemon.sprites.back_shiny || '/no-image.png'}
                                alt="Pokemon"
                                width={100}
                                height={100}
                            />
                            <Typography variant="p" typeFont="secondary">
                                Back Shiny
                            </Typography>
                        </StyledPokemonSprite>
                        <StyledPokemonSprite>
                            <Image
                                src={pokemon.sprites.front_shiny || '/no-image.png'}
                                alt="Pokemon"
                                width={100}
                                height={100}
                            />
                            <Typography variant="p" typeFont="secondary">
                                Front Shiny
                            </Typography>
                        </StyledPokemonSprite>
                        <StyledPokemonSprite>
                            <Image
                                src={pokemon.sprites.back_default || '/no-image.png'}
                                alt="Pokemon"
                                width={100}
                                height={100}
                            />
                            <Typography variant="p" typeFont="secondary">
                                Back Default
                            </Typography>
                        </StyledPokemonSprite>
                        <StyledPokemonSprite>
                            <Image
                                src={pokemon.sprites.front_default || '/no-image.png'}
                                alt="Pokemon"
                                width={100}
                                height={100}
                            />
                            <Typography variant="p" typeFont="secondary">
                                Back Default
                            </Typography>
                        </StyledPokemonSprite>
                    </StyledPokemonSprites>

                    <StyledBtnCtr>
                        <Button
                            handleClick={onAddOrDeletePokemonFavorite}
                            text={existInFavorites() ? 'Delete favorites' : 'Add favorites'}
                            styledType={existInFavorites() ? 'danger' : 'secondary'}
                            disabled
                            type="button"
                        />
                    </StyledBtnCtr>
                </StyledSprites>
            </StyledPokemonCard>
        </StyledPokemonPage>
    )
}
