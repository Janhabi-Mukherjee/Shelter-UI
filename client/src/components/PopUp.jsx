import '../css/PopUp.css'

function PopUp(props){
    
    return(
        <>
            <div className="popup">
                <div className="overlay"></div>
                <div className="popupPara">
                    <ul>
                        <li>Copy the key and click on the close button</li>
                    </ul>
                    <p>fghmr5476vkiyguyjgti78</p>
                </div>
                <button className="close-popup" onClick={props.handleClose}>x</button>
            </div>
        </>
    )
}
export default PopUp;