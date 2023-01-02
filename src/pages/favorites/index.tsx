import { ReactElement } from 'react'

// components
import { MainLayout, ViewLayout, Typography } from '../../components'

export default function FavoritesPage() {
    return (
        <>
            <Typography variant="h1" typeFont="secondary">
                Favorites
            </Typography>
        </>
    )
}

FavoritesPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout
            title="Pokemons favorites"
            description="Pokemons favorites"
            contentDescription="Pokemons favorites"
        >
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    )
}
