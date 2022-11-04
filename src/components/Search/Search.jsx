import React from 'react'
import './SearchStyles.css'

const Search = ({setSearch, setPageNumber}) => {
  return (
   <form className="d-flex flex-sm-row align-items-center justify-content-center gap-4 mb-5">
    <input
    onChange={(e)=>{
        setPageNumber(1)
        setSearch(e.target.value)
    }}
    type="text" className="input" placeholder="Search for characters"/>
    <button className="btn btn-success">Search</button>
    </form>
  )
}

export default Search