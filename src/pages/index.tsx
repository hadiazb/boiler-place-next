import { ReactElement } from 'react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

// components
import { MainLayout, ViewLayout, Typography, PokemonList } from '../components'

// providers
import { pokeApi } from '../providers'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

export default function HomePage({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Typography variant="h2" typeFont="secondary">
                Pokemons
            </Typography>
            <PokemonList pokemons={pokemons} />
        </>
    )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout
            title="Listado de Pokemones"
            description="Home de los pokemones"
            contentDescription="Esta es una descripción de prueba"
        >
            <ViewLayout pt="100px">{page}</ViewLayout>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps<{ pokemons: SmallPokemon[] }> = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=152')
    const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
        ...poke,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
            i + 1
        }.png`,
    }))

    return {
        props: {
            pokemons,
        },
    }
}
