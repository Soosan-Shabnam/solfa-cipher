import React from 'react';
import '../HomePage.css';
import {useNavigate} from 'react-router-dom';
import decoderImage from '../images/decoder.png'

export default function HomePage(props){
    const navigate = useNavigate();

    function hiddenButton(){
        alert("Button Clicked");
        navigate('/firstcodecheck');
    }

    return(
        <div>
            <div className="Decoder">
                <img src={decoderImage} alt="decoder" width="700" height="700"/>
            </div>
            {console.log('VCIF - The Key')}
            <div className="secretButton" id="secButton" onClick={hiddenButton}></div>
        </div>
    );
};