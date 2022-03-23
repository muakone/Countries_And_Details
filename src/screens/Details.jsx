import React from 'react'
import { useParams, useNavigate } from 'react-router'
import Arrow from '../images/arrow-left.svg'
import ArrowWhite from '../images/arrow-left-white.svg'
import { ThemeElements } from '../components/Theme'
import Border from '../components/Border'

const Details = ({
  themeElement, countries, 
  refetch, theme
}) => {
  const params = useParams()
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
  
    let names;
    let flags;
    let nativeName;
    let Population;
    let region;
    let subRegion;
    let capital;
    let topLevelDomain;
    let currencies = [];
    let languages = [];
    let borders = []

    countries.forEach((country) => {
      if(country.alpha3Code === params.details) {
        names = country.name;
        flags = country.flag;
        nativeName = country.nativeName;
        Population = country.population;
        region = country.region;
        subRegion = country.subregion;
        capital = country.capital;
        topLevelDomain = country.topLevelDomain

        country.currencies?.forEach((currency) => {
          currencies.push(currency.name)
        })

        country.languages?.forEach((language) => {
          languages.push(language.name)
        })

        country.borders?.forEach((border) => {
          borders.push(border)
        })
        
      }
    })
  return (
    <section className='details-header' style={theme}>
      <div className='back-detail' style={themeElement} onClick={goBack}>
        {themeElement === ThemeElements.Dark? <img src={ArrowWhite} style={themeElement} alt="" /> : <img src={Arrow} style={themeElement} alt="" />   }
          Back
      </div>
      <div className='detail-content'>
        <div className='details-img-container'>
          <img src={flags} alt="" className='detail-img' />
        </div>
        <article className='detail-article'>
        <h3>{names}</h3>
        <div className='detail-texts'>
          <div>
            <h5>Native Name: <span>{nativeName}</span></h5>
            <h5>Population: <span>{Population?.toLocaleString()}</span></h5>
            <h5>Region: <span>{region}</span></h5>
            <h5>Sub Region: <span>{subRegion}</span></h5>
            <h5>Capital: <span>{capital}</span></h5>
          </div>
          <div>
            <h5>Top Level Domain: <span>{topLevelDomain}</span></h5>
            <div className='mapping-details'>
              <h5>Currencies: 
              {currencies.map((currency) => {
                if(currencies.indexOf(currency) !== currencies.length - 1) {
                  return (
                    <span key={currency}>
                      {""}
                      {currency},
                    </span>
                  )
                } else {
                  return (
                    <span key={currency}>
                      {""}
                      {currency},
                    </span>
                  )
                }
              })}
              </h5>
            </div>
            <div className='mapping-details'>
              <h5>Languages:
              {languages.map((language) => {
                if(languages.indexOf(language) !== languages.length - 1) {
                  return (
                    <span key={language}>
                      {""}
                      {language},
                    </span>
                  )
                } else {
                  return (
                    <span key={language}>
                      {""}
                      {language},
                    </span>
                  )
                }
              })}
              </h5>
            </div>
          </div>
        </div>
        <Border borders={borders} themeElement={themeElement} refetch={refetch} navigate={navigate} />
        </article>
      </div>
    </section>
  )
}

export default Details