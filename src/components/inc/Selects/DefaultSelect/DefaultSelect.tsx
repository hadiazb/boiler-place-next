import { useState, ReactElement } from 'react'
import makeAnimated from 'react-select/animated'
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'

import { Typography } from '../..'

import { useCustomStyles } from './hooks'

import {
    StyledDefaultSelect,
    StyledWrapperSelect,
    StyledDefaultSelectRight,
    StyledDefaultSelectLeft,
    StyledWrapperField,
} from './deaultSelect-styles'

export interface DefaultSelectProps<T> {
    options: T[]
    children?: React.ReactNode
    isSearchable?: boolean
    defaultMenuIsOpen?: boolean
    isMulti?: boolean
    error?: ErrorValidationProps
}

export interface ErrorValidationProps {
    message?: string
    type?: string
}

const DefaultSelect = <T extends unknown>({
    options,
    children,
    defaultMenuIsOpen,
    isMulti,
    error,
    isSearchable = false,
}: DefaultSelectProps<T>): ReactElement => {
    const [showListOptions, setShowListOptions] = useState<boolean>(false)
    const { customStyles } = useCustomStyles()
    const animatedComponents = makeAnimated()

    const handleOpenList = () => {
        setShowListOptions(true)
    }

    const handleCloseList = () => {
        setShowListOptions(false)
    }

    return (
        <StyledWrapperField>
            <StyledWrapperSelect>
                <StyledDefaultSelectLeft>
                    {children}
                    <StyledDefaultSelect
                        isMulti={isMulti}
                        isSearchable={isSearchable}
                        options={options}
                        components={animatedComponents}
                        classNamePrefix="select"
                        defaultValue={options[0]}
                        styles={customStyles}
                        onMenuOpen={handleOpenList}
                        onMenuClose={handleCloseList}
                        defaultMenuIsOpen={defaultMenuIsOpen}
                        noOptionsMessage={(obj: { inputValue: string }) => (
                            <Typography variant="p">No hay resultados</Typography>
                        )}
                    />
                </StyledDefaultSelectLeft>
                <StyledDefaultSelectRight>
                    {!showListOptions ? <BsChevronCompactDown /> : <BsChevronCompactUp />}
                </StyledDefaultSelectRight>
            </StyledWrapperSelect>
            {error && (
                <Typography variant="span" color="danger" className="!text-sm">
                    {error.message}
                </Typography>
            )}
        </StyledWrapperField>
    )
}

export default DefaultSelect
