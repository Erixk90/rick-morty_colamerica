import React from 'react'
import './FilterBotonStyles.css'

const FilterBoton = ({ name, index, items, task, setPageNumber }) => {
    return (
        <div>

            <div className="form-check">
                <input
                onClick={ () => {
                    setPageNumber(1);
                    task(items);
                }}
                className="form-check-input"
                type="radio" 
                name={name}
                id={`${name}-${index}`} defaultChecked />
                <label className="btn btn-outline-success"
                htmlFor={`${name}-${index}`}>
                    {items}
                </label>
            </div>
        </div>
    )
}

export default FilterBoton