import Login from './Login';
import Background from './Background';
import Heading from './Heading';

import '../css/Home.css';
function Home(){
    return(
        <>
            <Heading/>
            <Background/>
            <div className='container'>
                <div className='logo'>
                    
                </div>
                <Login/>  
            </div>
           
        </>
    );
}
export default Home;
