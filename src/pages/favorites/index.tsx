import { ReactElement } from 'react'

// components
import { MainLayout, ViewLayout } from '../../components'

// views
import { FavoritesView } from '../../views'

export default function FavoritesPage() {
    return <FavoritesView />
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
