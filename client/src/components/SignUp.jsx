import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/Signup.css';
import Background from './Background';
import Heading from './Heading';

function SignUp(){

    const [orgname, setOrgname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        //window.location.replace("/login");*/
    }
    return(
        <>
            <Background/>
            <Heading/>
            <form className='signupForm' onSubmit={handleSubmit}>
                <div className='signupDiv'></div>
                <div className="mb-3">
                    <label for="companyName" className="form-label">Organization Name</label>
                    <input type="text" className="form-control" id="companyName" onChange={(e) => setOrgname(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="inputEmail3" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail3" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="inputPasswordConfirm" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="inputPasswordConfirm" onChange={(e) => setCPassword(e.target.value)}/>
                </div>
                
                <Link to='/'><button type="submit" className="btn btn-primary btnSignup">Sign Up</button></Link>
                <p className='signUpPara'>
                    Already have an account??<Link to='/'>Sign in</Link>
                </p>
                <div className='signupDiv1'></div>
                <div className='signupDiv2'></div>
            </form>
           
        </>
            
    );
}
export default SignUp;