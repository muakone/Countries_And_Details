import React from 'react'
import sun from '../images/moon.svg'
import moon from '../images/icon-moon.svg'

export const Themes = {
     Light: {
        background: 'hsl(0, 0%, 98%)',
        color: 'hsl(200, 15%, 8%)',
         
     },
     Dark: {
        background: 'hsl(207, 26%, 17%)',
        color: 'hsl(0, 0%, 100%)'
     }
    
}
export const ThemeElements = {
   Light: {
      background: 'hsl(0, 0%, 100%)',
      color: 'hsl(200, 15%, 8%)',
      Text: 'Dark',
      img: moon
   },
   Dark: {
      background: 'hsl(209, 23%, 22%)',
      color: 'hsl(0, 0%, 100%)',
      Text: 'Light', 
      img: sun
   }
}
export const ThemeInputs = {
    Light: {
       background: 'hsl(0, 0%, 100%)',
       color: 'hsl(0, 0%, 52%)'

    },
    Dark: {
       background: 'hsl(209, 23%, 22%)',
       color: 'hsl(0, 0%, 100%)'
    }
 }

export const Theme = React.createContext(Themes.Dark)
export const ThemeInput = React.createContext(ThemeInputs.Dark)
export const ThemeElement = React.createContext(ThemeElements.Dark)

