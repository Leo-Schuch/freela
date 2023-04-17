import styled from '@emotion/styled'
import React from 'react'

const FirstButton = styled.button`
    background: ${props => props.theme.colors.primarias.b};
    color: ${props => props.theme.colors.branco};
    border-radius: ${props => props.theme.spacings.s};
    padding: ${props => props.theme.spacings.xs} ${props => props.theme.spacings.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    border: none;
    &:hover {
        background: ${props => props.theme.colors.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.colors.dark.d};
    }
`
const SecondButton = styled.button`
    background: transparent;
    color: ${props => props.theme.colors.primarias.b};
    border: 2px solid ${props => props.theme.colors.primarias.b};
    border-radius: ${props => props.theme.spacings.s};
    padding: ${props => props.theme.spacings.xs} ${props => props.theme.spacings.s};
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    &:hover {
        border-color: ${props => props.theme.colors.dark.b};
        color: ${props => props.theme.colors.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.colors.focus};
    }
`

export const Buttons = ({children, variante = 'primaria'}) => {
    if (variante === 'primaria'){
        return(
            <FirstButton>
                {children}
            </FirstButton>
        )
    }
    return (
        <SecondButton>
            {children}
        </SecondButton>
    )
}
