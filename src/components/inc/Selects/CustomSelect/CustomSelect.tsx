import { useState, ReactElement, SelectHTMLAttributes } from 'react'
import { BsChevronCompactDown, BsChevronCompactUp, BsCheckAll, BsPerson } from 'react-icons/bs'

import { Typography } from '../..'

import {
    StyledSelectCtr,
    StyledOptionCtr,
    StyledLeftField,
    StyledRightField,
    StyledListField,
} from './customSelect-styles'

export interface SelectProps extends SelectHTMLAttributes<HTMLButtonElement> {
    iconLeft?: NonNullable<ReactElement>
}

const CustomSelect: React.FC<SelectProps> = ({ iconLeft, ...props }): ReactElement => {
    const [dropDown, setDropDown] = useState<boolean>(false)

    const onDropDown = () => {
        setTimeout(() => {
            setDropDown(!dropDown)
        }, 1000)
    }

    return (
        <StyledSelectCtr>
            <StyledOptionCtr onClick={onDropDown} border={dropDown}>
                <StyledLeftField>
                    {iconLeft}
                    <Typography variant="h4">Users</Typography>
                </StyledLeftField>
                <StyledRightField>
                    {!dropDown ? (
                        <BsChevronCompactDown title="Drop Down" />
                    ) : (
                        <BsChevronCompactUp title="Drop Up" />
                    )}
                </StyledRightField>
            </StyledOptionCtr>
            <StyledListField showList={dropDown}>
                {dummyData.map((item, i) => (
                    <StyledOptionCtr
                        key={item.value}
                        border={i + 1 === dummyData.length ? false : true}
                    >
                        <StyledLeftField>
                            {item.iconLeft}
                            <Typography variant="p">Users # {item.text}</Typography>
                        </StyledLeftField>
                        <StyledRightField>
                            <BsCheckAll title="Check" />
                        </StyledRightField>
                    </StyledOptionCtr>
                ))}
            </StyledListField>
        </StyledSelectCtr>
    )
}

export default CustomSelect

const dummyData = [
    {
        value: 'User # 1',
        text: 'User # 1',
        iconLeft: <BsPerson />,
    },
    {
        value: 'User # 2',
        text: 'User # 2',
        iconLeft: <BsCheckAll />,
    },
    {
        value: 'User # 3',
        text: 'User # 3',
        iconLeft: <BsPerson />,
    },
    {
        value: 'User # 4',
        text: 'User # 4',
        iconLeft: <BsCheckAll />,
    },
    {
        value: 'User # 5',
        text: 'User # 5',
        iconLeft: <BsPerson />,
    },
]
