import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

import './App.css'
import Cards from "./components/Cards/Cards"
import Filters from "./components/Filters/Filters"
import Pagination from './components/Pagination/Pagination'
import Search from './components/Search/Search'

function App() {
  let [pageNumber, setPageNumber] = useState(1)
  let [search, setSearch] = useState("")
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")

  let [paginationData , setPaginationData] = useState([])
  let {info, results}= paginationData
 

  let url =`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species} `

  useEffect(()=>{

    (async function () {
      let data = await fetch(url)
      .then((response) => response.json())
      setPaginationData(data)
  })()
  },[url])

  return (
    <div className="App">
      <h1 className="text-center text-white ubuntu my-3">
        <span className="text-success" ><a className='link' href='/'>Rick And Morty</a></span> Characters</h1>
        <Search setPageNumber={setPageNumber} setSearch ={setSearch}/>

      <div className="container">
        <div className="row">
            <Filters 
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
             />
            <div className="col-lg-8 col-12">
              <div className="row">
                <Cards results = {results} />
              </div>
          </div>
        </div>
      </div>
      <Pagination setPageNumber ={setPageNumber}/>
    </div>
  )
}

export default App
