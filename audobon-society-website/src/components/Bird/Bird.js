import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
const Bird = ({bird}) => {    
    return (
        <Fragment>            
            <Link key={bird.id} to={`/showBird/${bird.id}`} >
              <img key={bird.id} alt={bird.fields.name} src={bird.fields.image} />
            </Link>
        </Fragment>
    )
}

export default Bird;