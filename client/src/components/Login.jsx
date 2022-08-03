import {Link} from 'react-router-dom'; 
import '../css/Login.css';

function Login(){
    return(
        <>
            <div className='loginDiv'></div>
            <form className='loginform'>
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email Id:</label>
                    <input type="email" className="form-control" id="inputEmail" />
                </div>
                <div className="mb-3">
                    <label for="inputPassword" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="inputPassword"/>
                </div>
                <Link to='/key1'><button type="submit" className="btn btn-primary btnLogin">Login</button></Link>

                <p className='loginpara'>
                   New User??<Link to='/signup'>Create Account</Link>
                </p>
            </form>
            <div className='loginDiv1'></div>
            <div className='loginDiv2'></div>

        </>
    )
}
export default Login;