import { ReactElement } from 'react'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

// components
import { MainLayout, ViewLayout } from '../../components'

// views
import { PokemonView } from '../../views'

// provider
import { pokeApi } from '../../providers'

// models
import { Pokemon } from '../../interfaces'

export interface PokemonPageProps extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function PokemonPage({ pokemon }: PokemonPageProps) {
    return <PokemonView pokemon={pokemon} />
}

PokemonPage.getLayout = function getLayout(page: ReactElement) {
    const { props } = page
    const { pokemon } = props
    const { name } = pokemon as Pokemon
    return (
        <MainLayout title={name} description={name} contentDescription={name}>
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemonsSize = [...Array(152)].map((_, index) => `${index + 1}`)

    return {
        paths: pokemonsSize.map((id) => ({
            params: { id },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<{ pokemon: Pokemon }> = async (ctx) => {
    const { params } = ctx
    const { id } = params as { id: string }
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

    return {
        props: {
            pokemon: data,
        },
    }
}
