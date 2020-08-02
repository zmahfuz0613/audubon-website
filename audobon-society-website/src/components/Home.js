import React, { useState, useEffect, Fragment } from "react"
import axios from "axios"
import Bird from './Bird/Bird';

const Home = () => {

    //Birds
    const [birds, setBirds] = useState([]);

    //Get birds
  useEffect(() => {
    
    const apiCall = async () => {      
      const birdsResult = await axios.get(`${process.env.REACT_APP_AIRTABLE_API_URL}/Bird`, {
        
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
        }
      })      
      setBirds(birdsResult.data.records);      
    }
    apiCall();
  }, [])

    return (
        <Fragment>
         
          <ul className="flex-container">
          <h1>Birds</h1>
        {birds.map(bird => (
            <div className="flex-item" key={bird.id}>
                <Bird key={bird.id}
                      bird={bird}/>
                      </div>
            ))
        }
        </ul>
        </Fragment>
    );
}

export default Home;