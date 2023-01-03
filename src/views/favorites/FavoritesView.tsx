import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

// components
import { Typography, FavoritePokeCard } from '../../components'

// models
import { AppDispatch, RootState } from '../../store'
import { Pokemon } from '../../interfaces'

// actions
import { deletePokemon } from '../../store/pokemons'

// styles
import { StyledFavoritePokePage } from './favoritesView-styles'

export default function FavoritesView() {
    const dispatch: AppDispatch = useDispatch()
    const { favorites } = useSelector((store: RootState) => store.pokemons)

    const onDeletePokemonFavorite = (pokemon: Pokemon) => {
        dispatch(deletePokemon(pokemon))
    }

    const router = useRouter()

    return (
        <StyledFavoritePokePage>
            {favorites.length > 0 ? (
                <>
                    <Typography variant="h1" typeFont="secondary">
                        Favorites
                    </Typography>
                    <FavoritePokeCard
                        favorites={favorites}
                        onButtonClick={onDeletePokemonFavorite}
                        onNavigate={(poke) => {
                            router.push(`/pokemon/${poke.id}`)
                        }}
                    />
                </>
            ) : (
                <Typography variant="h1" typeFont="secondary">
                    No hay Favoritos
                </Typography>
            )}
        </StyledFavoritePokePage>
    )
}
