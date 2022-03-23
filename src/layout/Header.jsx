import React from 'react'

const Header = ({
  themeElement, themeToggler
}) => {
    
  return (
    <section className='home-header d-flex box-shadow' style={themeElement}>
        <div>
          <h2>Where in the world?</h2>
        </div>
        <div onClick={themeToggler} className='d-flex theme-toggle'>
          <img src={themeElement.img} alt="" className='img-toggle' />
          <h5>{themeElement.Text}</h5>
        </div>
    </section>
  )
}

export default Header