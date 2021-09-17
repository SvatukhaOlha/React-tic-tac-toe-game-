import React from 'react'

function Squeres(props) {
    return (
        <div className="cells" onClick={props.onClick}>
            <h1 className='item'>{props.value}</h1>
        </div>
    )
}

export default Squeres
