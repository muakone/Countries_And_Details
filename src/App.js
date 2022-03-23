import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Theme, Themes} from './components/Theme'
import { ThemeInput, ThemeInputs, ThemeElements} from './components/Theme'
import Details from './screens/Details'
import Header from './layout/Header';
import Card from './screens/Card';
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import SearchFilter from './layout/SearchFilter';

function App() {
  const [theme, setTheme] = useState(Themes.Dark)
  const [themeInput, setThemeInput] = useState(ThemeInputs.Dark)
  const [themeElement, setThemeElement] = useState(ThemeElements.Dark)
  const [countries, setCountries] = useState([])
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const countrieRef = useRef()
  const regionRef = useRef()
  const navigate = useNavigate()
  const noResult = countries.status || countries.message;
 
  
  /* ThemeToggler */

  const themeToggle = () => {
    theme === Themes.Dark
    ? setTheme(Themes.Light)
    : setTheme(Themes.Dark)
  }
  const themeToggleInput = () => {
    themeInput === ThemeInputs.Dark
    ? setThemeInput(ThemeInputs.Light)
    : setThemeInput(ThemeInputs.Dark)
  }
  const themeToggleElement = () => {
    themeElement === ThemeElements.Dark
    ? setThemeElement(ThemeElements.Light)
    : setThemeElement(ThemeElements.Dark)
  }
  const themeToggler = () => {
    themeToggle()
    themeToggleInput()
    themeToggleElement()
  }
    
/* GetData */ 
  useEffect(() => {
      getData()
      handleSubmit()
  }, [])

  const getData = async() => {
    setIsPending('true')
    try {
      const res = await fetch('https://restcountries.com/v2/all') 
    const data = await res.json()
    await setCountries(data)
    setIsPending(false)
    console.log(data)
    } catch(error) {
      console.log(error)
      setError('Something went wrong...')
      setIsPending(false)
    }
    
}

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }
    const searchValue = countrieRef.current.value;
    if(searchValue.trim()) {
      const fetchSearch = async () => {
        const res = await fetch(`https://restcountries.com/v2/name/${searchValue}`) 
          const data = await res.json()
          setCountries(data)
      }
        fetchSearch()
    }
  };
  
  const filterByRegion = () => {
    const selectValue = regionRef.current.value;
    if(selectValue.trim()) {
      const fetchSelect = async () => {
        const res = await fetch(`https://restcountries.com/v2/region/${selectValue}`) 
          const data = await res.json()
          if(selectValue === "All") {
            try {
              getData()
            } catch(error) {
              console.log(error)
            }
            return;
          }
          setCountries(data)
      }
      try{
        fetchSelect()
      } catch (error) {
        console.log(error)
      }
    }
}

/* Navigate */
  const showDetails = (code) => {
    navigate(`/${code}`)
  }
  

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
    color: white;
   `;
   const color = themeElement.color;
  
  return (
      <div className="App" style={theme}>
        <Theme.Provider value={theme}>
          <Header value={themeElement} themeElement={themeElement} themeToggler={themeToggler}   />
          <Routes>
            <Route path='/' element={          
              <div> 
                <ThemeInput.Provider value={themeInput} >
                  <SearchFilter themeInput={themeInput} themeElement={themeElement} handleSubmit={handleSubmit} countrieRef={countrieRef} regionRef={regionRef} filterByRegion={filterByRegion} />
                  {isPending ? <div className='isloading-text'>
                  <p className='text-center'>Please Wait</p> <BeatLoader css={override} color={color} size={15} />
                  </div> : <p></p> }
                  <h4 className='text-center'>{error}</h4>
                  <section className='card-section'>
                    {!error && 
                      (!noResult ? (
                        countries.map((country, index) => (
                        <Card value={themeElement} themeElement={themeElement} countries={countries} showDetails={showDetails} index={index} name={country.name} flag={country.flag} population={country.population} capital={country.capital} region={country.region} code={country.alpha3Code} key={index} />
                         ))
                        ) : (
                        <h4 className='text-center'>No Result Found</h4>
                      ))
                    }
                  </section> 
                </ThemeInput.Provider>
              </div>
              } />
            <Route path='/:details' element={
              <Details value={theme} theme={theme} themeElement={themeElement} countries={countries} refetch={getData} />
            } />
          </Routes>    
        </Theme.Provider>
      </div>
  );
}

export default App;
