import {Link} from 'react-router-dom';
import PopUp from './PopUp';
import '../css/Request.css'
import { useState } from 'react';
import Heading from './Heading';
import logo from '../img/req.jpeg';
function Request(){

    const [getKey,setKey]=useState(false);

    function handleKey(){
        setKey(!getKey);   
    }

    
    function handleSubmit(){
        
    }
    return (
        <>
            <div className='reqContainer'>
                <div className='reqDiv1'>
                    <Heading/>
                    <img src={logo} alt="" />
                    <div className='key'>
                        <button onClick={handleKey} className='btn-reqPopup'>generate key 1</button>
                        {getKey&& <PopUp handleClose={handleKey}/>}
                    </div>
                     {//sending the key from hospital to policymaker backend
                        //it will trigger the backend of    policymaker
                    }
                    <div className='reqForm'>
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label for="inputkey" className="form-label">Paste the key here</label>
                        <input type="text" className="form-control" id="inputKey" />
                        </div>
                        <Link to='/key2'><button className='btn-key'>send</button></Link>
                        </form>
                    </div>
                </div>
                <div className='reqDiv2'>
                    <ul className='requl'>
                        <li>Click on the <span>get your key</span>button</li>
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