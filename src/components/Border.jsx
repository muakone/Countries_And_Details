import React from 'react'

const Border = ({
  borders, themeElement, 
  refetch, navigate
}) => {
  return (
    <div className='border'>
      <h5 className='border-text'>Border Countries:</h5>
      {borders.length ? (
        <div className='d-flex border-space'>
          {borders.map(border => (
          <div style={themeElement} key={border} className='border-child box-shadow'
            onClick={() => {
            refetch();
            navigate(`/${border}`);
            }}>
              {border}
          </div>
        ))}
        </div> 
      ) : (
        <div>
            <p>No borders ...</p>
          </div>
      )
    }
    </div>
  )
}

export default Border