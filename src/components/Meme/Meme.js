import React, { useState } from 'react';
import './Meme.css';

import memeData from '../../memeData/memeData';




const Meme = (props) => {
    // const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1g8my4.jpg');
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    });
    const [allMemeImages, setAllMemeImages] = useState(memeData)

    const getMemeImg = () => {
        let memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        let url = memesArray[randomNumber].url;
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    const handleChange = (e) => {
        const {name, value} = e.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className='form'>
                <input 
                    type="text" 
                    className='form--input'
                    placeholder='Top text'
                    name='topText'
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className='form--input'
                    placeholder='Bottom text'
                    name='bottomText'
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button  
                className='form--button'
                onClick={getMemeImg}
                >
                    Get a new meme image  &#127924;
                </button>
            </div>
            <div className="meme--image">
                <img src={meme.randomImage} className="memeImage" alt="" />
                <h2 className="top--text">{meme.topText}</h2>
                <h2 className="bottom--text">{meme.bottomText}</h2>
            </div>   
        </main>
    );
};

export default Meme;