import React from 'react'
import {ThemeProvider} from '@emotion/react'

const tema = {
  colors:{
    branco: '',
    atencao: '',
    focus: '',  
    primarias:{
      a: '#5754ED',
      b: '',
      c: ''
    },
    secundarias:{
      a: '#EBEAF9',
      b: '',
      c: ''
    },
    neutras:{
      a: '',
      b: '',
      c: '',
      d: ''
    },
    dark:{
      a: '',
      b: '',
    },
  },
  spacings: {
    xxs: '4px',
    xs: '8px',
    s: '16px',
    m: '24px',
    l: '32px',
    xl: '48px',
    xxl: '64px',
  },
  fontFamily: "'Montserrat', sans-serif"
}

export const ThemeProv = ({children}) => {
  return (
    <ThemeProvider theme={tema}>
      {children}
    </ThemeProvider>
  )
}

