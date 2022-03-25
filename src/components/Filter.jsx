import React from 'react'

const Filter = ({themeInput, regionRef, filterByRegion}) => {
  return (
    <select className="dropdown box-shadow" style={themeInput} ref={regionRef} onChange={filterByRegion}>
        <option>All</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
    </select>
  )
}

export default Filter