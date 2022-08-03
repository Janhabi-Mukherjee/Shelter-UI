import { useState } from "react";
import {Link} from "react-router-dom";
import PopUp from "./PopUp";
import Heading from "./Heading";
import logo2 from '../img/logo2.jpeg';
import '../css/GenerateKey.css';
function Request(){
    
    const [getKey,setKey]=useState(false);

    function handleKey(){
        setKey(!getKey);   
    }

    function handleSubmit(){
        //return (Window.alert('conection successful'))
        //zvirtuaabw7lgmvv
        
    }
    return (
        <>
            <div className="genContainer">
                <div className="genDiv1">
                    <Heading/>
                    <img src={logo2} alt="" />
                    <div className='genKey'>
                        <button onClick={handleKey} className='btn-genPopup'>Generate key 2</button>
                        {getKey&&<PopUp handleClose={handleKey}/>}
                            {//sending the key from policymaker to hospital backend
                            //it will trigger the backend of hospital
                        }
                    </div>
                    <div className="genForm">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="inputkey" className="form-label">Paste the key here</label>
                                <input type="text" className="form-control" id="inutKey" />
                            </div>
                            <Link to='/analysis'><button className="btn-genkey">send</button></Link>
                        </form>
                    </div>
                </div>
                <div className="genDiv2">
                    <ul className='genul'>
                        <li>Click on the <span>generate key</span> button</li>
                        <li>A popup will appear in your screen, copy the key from there.</li>
                        <li>Now paste the key on the space given below</li>
                        <li>Click on the send button, it will redirect you to the new page</li>
                    </ul>
                </div>

            </div>
           
        </>
    );
}
export default Request;