import React from 'react'
import  './CardStyles.css'

const Cards = ({ results }) => {

    let message = "No characters found"
    if (results) {
        message = results.map((i) => {
            let { id, name, image, species, gender, origin, location, status } = i
            return (
                <div key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative">
                    <div className="cards pb-1">
                        <img src={image} alt="" className="img-fluid img " />
                        <div className="content px-1">
                            <div className="fs-6 fw-bold mb-4">{name}</div>
                            {(()=>{
                                if(status === "Dead"){
                                    return(
                                    <div className="badge bg-danger">{status}</div>)
                                }
                                else if(status==="Alive"){
                                    return(
                                        <div className="badge bg-success">{status}</div>
                                    )
                                }
                                else{
                                    return(
                                <div className="badge bg-secondary">{status}</div>)}
                            })()}
                            
                        </div>
                        <div className="px-1">
                            <div className=""><span className='ubuntu text-success'>Species:</span> {species}</div>
                            <div className=""><span className='ubuntu text-success'>Gender:</span> {gender}</div>
                            <div className=""><span className='ubuntu text-success'>Origin:</span> {origin.name}</div>
                            <div className=""><span className='ubuntu text-success'>Location: </span>{location.name}</div>
                        </div>
                    </div>
                </div>
            )
        })
    } else {
        message
    }
    return (
        <>
            {message}
        </>
    )
}

export default Cards