import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowBird = () => {

  const params = useParams();
  const [bird, setBird] = useState({});

  useEffect(() => {
    
    const apiCall = async () => {      
      const birdResult = await axios.get(`${process.env.REACT_APP_AIRTABLE_API_URL}/Bird/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        }
      });
    
      setBird(birdResult.data.fields);
    }
    apiCall();
  }, [params]) 

  const redirectToBirdPage = e =>{
    e.preventDefault();
    window.location = bird.homePage;
  };

  return (
      <Fragment>

        <div className="container">
          <div className="bird-container">
            <div className="col-25">
            <div className="bird-thumb">
              <img key={bird.id} alt={bird.name} src={bird.image} />
            </div>
            </div>
            <div className="col-50">
            <div className="bird-information">
              <h1 className="bird-title">{bird.name}</h1>
              <p className="font-oblique">({bird.genus})</p> 
              <b>Conservation status</b>
              <p>{bird.conservationStatus}</p>
              <button type="button" onClick={redirectToBirdPage}>Read more</button>
            </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
    
    
}

export default ShowBird;