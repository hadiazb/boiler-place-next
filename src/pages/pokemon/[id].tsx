import { ReactElement } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

// components
import { MainLayout, ViewLayout, Typography, DefaultButton as Button } from '../../components'

// provider
import { pokeApi } from '../../providers'

// store
import { addPokemon, deletePokemon } from '../../store/pokemons'

// models
import { Pokemon } from '../../interfaces'
import { AppDispatch, RootState } from '../../store'

export interface PokemonPageProps extends InferGetStaticPropsType<typeof getStaticProps> {}

export default function PokemonPage({ pokemon }: PokemonPageProps) {
    const dispatch: AppDispatch = useDispatch()
    const { favorites } = useSelector((store: RootState) => store.pokemons)

    const onAddOrDeletePokemonFavorite = () => {
        if (favorites.includes(pokemon)) {
            return dispatch(deletePokemon(pokemon))
        }
        return dispatch(addPokemon(pokemon))
    }

    const colorButton = (): boolean => (!favorites.includes(pokemon) ? true : false)

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
                            text={colorButton() ? 'Add favorites' : 'Delete favorites'}
                            styledType={colorButton() ? 'secondary' : 'danger'}
                            disabled
                            type="button"
                        />
                    </StyledBtnCtr>
                </StyledSprites>
            </StyledPokemonCard>
        </StyledPokemonPage>
    )
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

import tw, { styled, css } from 'twin.macro'

export const StyledPokemonCardMixed = css`
    ${tw`shadow-[0px 3px 6px #00000029]  rounded-2xl bg-light`}
`

export const StyledPokemonPage = styled.section`
    ${tw`my-5`}

    & h1 {
        ${tw`w-full text-center`}
    }
`

export const StyledPokemonCard = styled.div`
    ${tw`flex flex-col items-center gap-5`}
    ${tw`sm:flex-row sm:items-start`}
`

export const StyledPokemonDefault = styled.div`
    ${StyledPokemonCardMixed}
    ${tw`p-6`}
    ${tw`sm:p-8`}
`

export const StyledSprites = styled.div`
    ${StyledPokemonCardMixed}
    ${tw`p-5 sm:w-full md:justify-around`}

    & h2 {
        ${tw`text-center my-5 lg:text-left lg:ml-10`}
    }
`

export const StyledPokemonSprites = styled.div`
    ${tw`flex flex-wrap justify-center items-center gap-3`}
    ${tw`md:justify-around my-11`}
`

export const StyledPokemonSprite = styled.div`
    ${tw`flex flex-col items-center`}

    & p {
        ${tw`lg:text-md`}
    }
`

export const StyledBtnCtr = styled.div`
    ${tw`flex lg:justify-end`}

    & button {
        ${tw`!m-0 w-full lg:w-48`}
    }
`
