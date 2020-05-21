import React from 'react'

const SearchBox = () => {

  const searchStyles = {
    position: 'absolute',
    top: '10px',
    left:' 25%',
    zIndex: '5',
    backgroundColor: '#fff',
    padding: '5px',
    border: '1px solid #999',
    textAlign: 'center',
    fontFamily: 'Roboto,sans-serif',
    lineHeight: '30px',
    paddingLeft: '10px',
  }

  return (
    <div id="floating-panel" style={searchStyles}>
      <input id="address" type="textbox" value="Sydney, NSW" />
      <input id="submit" type="button" value="Geocode" />
    </div>
  )
}

export default SearchBox;
