import React from 'react'
import { ThemeElements } from './Theme'
import SearchWhite from '../images/search-icon-white.svg'
import SearchDark from '../images/search-icon-dark.svg'

const Search = ({themeInput, handleSubmit, themeElement, countrieRef}) => {
  return (
    <form style={themeInput} onSubmit={handleSubmit} className="form-search">
        {themeElement === ThemeElements.Dark?
            <div>
                <img src={SearchWhite} className='search-img' style={themeElement} alt="" />
                <input onChange={handleSubmit} ref={countrieRef} type="text" placeholder='Search for a country' style={themeInput} className='input-search input-dark' />
            </div> :
            <div>
                <img src={SearchDark} className='search-img' style={themeElement} alt="" />
                <input onChange={handleSubmit} ref={countrieRef} type="text" placeholder='Search for a country' style={themeInput} className='input-search input-light' />
            </div>  
        }
    </form>
  )
}

export default Search