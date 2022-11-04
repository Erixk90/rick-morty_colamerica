import React from 'react'
import FilterBoton from '../FilterBoton'

const Species = ({ setSpecies, setPageNumber }) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poppybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet"
    ]
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Species
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-2">
                    {species.map((items, index) => (
                        <FilterBoton
                            task={setSpecies}
                            setPageNumber={setPageNumber}
                            key={index}
                            name="species"
                            index={index}
                            items={items} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Species