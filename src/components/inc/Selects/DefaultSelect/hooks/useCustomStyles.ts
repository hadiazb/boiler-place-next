import { StylesConfig } from 'react-select'

import { Theme } from '../../../../../assets/style/Theme'

export const useCustomStyles = () => {
    const { borderRadius, colors, fontFamily, font, boxShadow } = Theme()

    const customStyles: StylesConfig<any> = {
        control: (styles) => ({
            ...styles,
            borderRadius: borderRadius.md,
            backgroundColor: 'transparent',
            height: '64px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: boxShadow.transparent,
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
            ...styles,
            cursor: 'pointer',
            height: '60px',
            borderBottom: `1px solid ${colors.dark}`,
            display: data.value === '' || data.value === 'default' ? 'none' : 'flex',
            alignItems: 'center',
            fontSize: font.size.base,
            backgroundColor: 'transparent',
            color: colors.dark,
            opacity: 0.7,
            ':hover': {
                opacity: 1,
            },
        }),
        menu: (styles) => ({
            ...styles,
            margin: 0,
            padding: '10px',
            borderBottomLeftRadius: borderRadius.md,
            borderBottomRightRadius: borderRadius.md,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            backgroundColor: colors.light,
            boxShadow: boxShadow.transparent,
        }),
        valueContainer: (styles) => ({
            ...styles,
            paddingLeft: '40px',
        }),
        menuList: (styles) => ({
            ...styles,
            maxHeight: '500px',
            '::-webkit-scrollbar-thumb': {
                width: 8,
                borderRadius: 3,
            },
            '::-webkit-scrollbar': {
                width: 8,
                borderRadius: 3,
                background: 'rgba(0, 0, 0, 0.1)',
            },
        }),
        input: (styles) => ({ ...styles, fontFamily: fontFamily.helvetica[0] }),
        placeholder: (styles) => ({ ...styles }),
        singleValue: (styles, { data }) => ({
            ...styles,
            fontSize: font.size.base,
            fontWeight: 'bold',
        }),
        indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
        indicatorsContainer: (styles) => ({ ...styles, display: 'none' }),
        clearIndicator: (styles) => ({
            ...styles,
        }),
        container: (styles) => ({
            ...styles,
        }),
        dropdownIndicator: (styles) => ({
            ...styles,
        }),
        group: (styles) => ({
            ...styles,
        }),
        groupHeading: (styles) => ({
            ...styles,
        }),
        loadingIndicator: (styles) => ({
            ...styles,
        }),
        loadingMessage: (styles) => ({
            ...styles,
        }),
        menuPortal: (styles) => ({
            ...styles,
        }),
        multiValueLabel: (styles) => ({
            ...styles,
        }),
        multiValueRemove: (styles) => ({
            ...styles,
        }),
        noOptionsMessage: (styles) => ({
            ...styles,
        }),
    }

    return {
        customStyles,
    }
}
