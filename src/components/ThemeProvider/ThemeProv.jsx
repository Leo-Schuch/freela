import React from 'react'
import {ThemeProvider} from '@emotion/react'

const tema = {
  colors:{
    branco: '#ffffff',
    atencao: '',
    focus: '#B009ff',  
    primarias:{
      a: '#5754ED',
      b: '#D93114',
      c: ''
    },
    secundarias:{
      a: '#F8F8FD',
      b: '',
      c: ''
    },
    neutras:{
      a: '#373737',
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

