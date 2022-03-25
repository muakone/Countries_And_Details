import React from 'react'
import Search from '../components/Search'
import Filter from '../components/Filter'

const SearchFilter = ({
  themeInput, themeElement, 
  handleSubmit, countrieRef, 
  regionRef, filterByRegion
}) => {
  return (
    <section className='d-flex search-filter'>
        <div className='search-container'>
          <Search themeElement={themeElement} handleSubmit={handleSubmit} countrieRef={countrieRef} themeInput={themeInput} />
        </div>
        <div className="dropdown">
          <Filter themeInput={themeInput} regionRef={regionRef} filterByRegion={filterByRegion} />
        </div>
    </section>
  )
}

export default SearchFilter