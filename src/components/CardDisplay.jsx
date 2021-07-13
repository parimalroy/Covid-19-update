import React from 'react'
import './../layout.css'

const CardDisplay =(props)=>{
    return(
        <>
            <div className="card-columns col-lg-6 col-md-6 col-sm-12 col-12 card-display">
                <div className="card card-primary ">
                    <div className="card-body " className={props.color}>
                        <p className="data-title">{props.title}</p>
                        <p className="updateData" className={props.dataColor}>{props.updateData}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardDisplay;