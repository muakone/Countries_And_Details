import React from 'react'
import { ThemeElements } from '../components/Theme'
import SearchWhite from '../images/search-icon-white.svg'
import SearchDark from '../images/search-icon-dark.svg'

const SearchFilter = ({
  themeInput, themeElement, 
  handleSubmit, countrieRef, 
  regionRef, filterByRegion
}) => {
  return (
    <section className='d-flex search-filter'>
        <div className='search-container'>
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
        </div>
        <div className="dropdown">
          <select className="dropdown box-shadow" style={themeInput} ref={regionRef} onChange={filterByRegion}>
            <option>All</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
    </section>
  )
}

export default SearchFilter