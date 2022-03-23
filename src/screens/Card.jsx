import React from 'react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll'

const Card = ({
  themeElement, index, 
  flag, name, 
  population, region, 
  capital, showDetails, 
  code
}) => {
  const showDetailsHandler = () => {
    showDetails(code)
  }
  const populations = population.toLocaleString()
    
  return (
    <ScrollAnimation animateIn='fadeInOut'
    animateOut='fadeInOut'  delay={400} className='card'>
      <div className='card box-shadow' style={themeElement} key={index} onClick={showDetailsHandler}>
        <div className='img-container'>
            <img src={flag} alt="" className='card-img' />
        </div>
        <div className='card-body'>
            <h4>{name}</h4>
            <p>population: <span>{populations}</span></p>
            <p>region: <span> {region}</span></p>
            <p>Capital: <span> {capital}</span></p>
        </div>
      </div>
    </ScrollAnimation>    
  )
}

export default Card