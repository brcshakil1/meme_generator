import React, { useState } from 'react';
import './Meme.css';

import memeData from '../../memeData/memeData';




const Meme = (props) => {
    const [image, setImage] = useState('');

    const getMemeImg = () => {
        let memesArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[randomNumber].url;
        
        setImage(url)
    }

    return (
        <main>
            <div className='form'>
                <input 
                    type="text" 
                    className='form--input'
                    placeholder='Top text'
                />
                <input 
                    type="text" 
                    className='form--input'
                    placeholder='Bottom text'
                />
                <button  
                className='form--button'
                onClick={getMemeImg}
                >
                    Get a new meme image  &#127924;
                </button>
            </div>
            <img src={image} alt="" />
        </main>
    );
};

export default Meme;