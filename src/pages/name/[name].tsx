import { ReactElement } from 'react'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

// components
import { MainLayout, ViewLayout } from '../../components'

// views
import { PokemonView } from '../../views'

// provider
import { pokeApi } from '../../providers'

// models
import { Pokemon, PokemonListResponse } from '../../interfaces'

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
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=100')

    return {
        paths: data.results.map((poke) => ({
            params: { name: poke.name },
        })),
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<{ pokemon: Pokemon }> = async (ctx) => {
    const { params } = ctx
    const { name } = params as { name: string }
    let pokemon: Pokemon

    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`)

        pokemon = {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
        }
    } catch (error) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            pokemon,
        },
        revalidate: 86400,
    }
}
