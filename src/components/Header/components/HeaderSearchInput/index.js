import React from 'react'

const HeaderSearchInput = () => {
  return (
    <div>
      <input 
        type="search" 
        name="search" 
        id=""
        placeholder='Buscar productos, marcas y más...'
      />
      <button>Search</button>
    </div>
  )
}

export default HeaderSearchInput;