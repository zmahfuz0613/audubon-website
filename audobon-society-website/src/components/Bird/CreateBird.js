import React, { Fragment, useState } from 'react';
import axios from "axios"
const CreateBird = () => {

    //Create state of birds.
    const [bird, setBird] = useState({
        name: '',
        genus:'',
        image: '',
        homePage: '',
        conservationStatus: ''
    });

    const [error, setError] = useState(false);

    //Update state when the user write in a input
    const updateState = e => {
        setBird({
            ...bird,
            [e.target.name]: e.target.value 
        });
    }

    //Extract values
    const { name, genus, image, homePage, conservationStatus } = bird;

    //Save bird
    const submitBird  = async (e) => {
        e.preventDefault();        

        //Validate
        if(name.trim() === '' || genus.trim() === '' || image.trim() === '' || homePage.trim() === ''){
            setError(true);
            return;
        }

        //Delete error message
        setError(false);

        //Refresh form
        setBird({
            name: '',
            genus:'',
            image: '',
            homePage: '',
            conservationStatus: ''
        });

        await axios.post(`${process.env.REACT_APP_AIRTABLE_API_URL}/Bird/`, {
          fields: {
            name: name,
            genus: genus,
            image: image,
            homePage: homePage,
            conservationStatus: conservationStatus
          }
        }, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json'
          }
        })
     window.location.href="/"
    }

    return (
        <Fragment>
            <div className="container">
                <h1>Add a New Bird</h1>
                {error ?  <p>All fields are required except Conservation status</p>: null }
                <form onSubmit={submitBird}>
                    <label>Name</label>
                    <input type="text"
                        name="name"
                        onChange={updateState}
                        value={name}>                       
                    </input>
                    <label>Genus</label>
                    <input type="text"
                        name="genus"
                        onChange={updateState}
                        value={genus}>                       
                    </input>
                    <label>Image</label>
                    <input type="text"
                        name="image"
                        onChange={updateState}
                        value={image}>
                    </input>
                    <label>Homepage</label>
                    <input type="text"
                        name="homePage"
                        onChange={updateState}
                        value={homePage}>
                    </input>
                    <label>Conservation status</label>
                    <textarea name="conservationStatus"
                            onChange={updateState}
                            value={conservationStatus}>
                    </textarea>
                    <button type="submit">Submit</button>
                </form>
        </div>
        </Fragment>
    );
}

export default CreateBird;