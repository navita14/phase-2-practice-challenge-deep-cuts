import React from 'react'

function Search({setSearch}) {
  function handleChange(event){
    setSearch(event.target.value)
  }

  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={handleChange}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search