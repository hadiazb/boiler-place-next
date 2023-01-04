export interface Pokemon {
    id: number
    name: string
    sprites: Sprites
}

export interface Sprites {
    back_default: string
    back_female: null
    back_shiny: string
    back_shiny_female: null
    front_default: string
    front_female: null
    front_shiny: string
    front_shiny_female: null
    other?: Other
}

export interface Home {
    front_default: string
    front_female: null
    front_shiny: string
    front_shiny_female: null
}

export interface DreamWorld {
    front_default: string
    front_female: null
}

export interface Other {
    dream_world: DreamWorld
    home: Home
}
