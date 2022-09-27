import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function FirstCodeCheck(){
    const [code1, setCode1] = useState();
    const [code2, setCode2] = useState();
    const [code3, setCode3] = useState();
    const [expandForm, setExpandForm] = useState(false);
    const navigate = useNavigate();

    function handleCode1(e){
        setCode1(e.target.value);
    }

    function handleCode2(e){
        setCode2(e.target.value);
    }

    function handleCode3(e){
        setCode3(e.target.value);
    }

    function authenticate(e){
        console.log(code1);
        console.log(code2);
        console.log(code3);

        if(code1 === 'GRAVITAS' && code2 === 'HYBRID' && code3 === 'HUNT'){
            fetch('../to_be_decoded.zip').then(response => {
                response.blob().then(blob => {
                    // Creating new object of PDF file
                    const fileURL = window.URL.createObjectURL(blob);
                    // Setting various property values
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = '../to_be_decoded.zip';
                    alink.click();
                })
            })
            navigate('/secondcodecheck');
        }
        else{
            setExpandForm(true);
        }
        e.preventDefault();
    };

    return(
        <div>
           <form id="form1" onSubmit={authenticate}>
                <label htmlFor="fcode">Enter Code 1</label><br/>
                <input 
                    onChange={handleCode1}
                    name="fcode"
                    type="text"
                    id="fcode"
                    value={code1}
                    />
                    <br/>
                <label htmlFor="scode">Enter Code 2</label><br/>
                <input
                    onChange={handleCode2}
                    name="scode"
                    type="text"
                    id="scode"
                    value={code2}
                />
                <br/>
                <label htmlFor="tcode">Enter Code 3</label><br/>
                <input
                    onChange={handleCode3}
                    name="tcode"
                    type="text"
                    id="tcode"
                    value={code3}
                />
                <br/>
                <button type="submit">Submit</button>
           </form>

           {expandForm === true ? (
                <h1>Try Again</h1>
              ) : null}

        </div>
    );
};