import React from 'react'
import Gender from './categories/Gender'
import Status from './categories/Status'
import Species from './categories/Species'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("")
    setPageNumber("")
    setGender("")
    setSpecies("")
    window.location.reload(false)

  }
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center text-white fw-bold fs-4 mb-4"> Filter</div>
      <div
        onClick={clear}
        style={{cursor:"pointer"}}
        className="text-center text-white text-decoration-underline">Clear Filters</div>
      <div className="accordion" id="accordionExample">
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>

    </div>
  )
}

export default Filters