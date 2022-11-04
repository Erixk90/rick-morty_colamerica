import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({pageNumber, setPageNumber}) => {

    let next = () => {
        setPageNumber((i)=> i + 1)
    }

    
    let prev = () => {
        if (pageNumber ===  1) return
        setPageNumber((i)=> i - 1)
    }

  return (
    <div className='container d-flex justify-content-between'>
        <button  onClick={prev} className="btn btn-success">Previous</button>
        <button onClick={next} className="btn btn-success">Next</button>
    </div>
  )
}

export default Pagination