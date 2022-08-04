import './css/App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Request from './components/Request'; 
import GenerateKey from './components/GenerateKey'
import {HashRouter as Router, Routes, Route} from "react-router-dom"; 
import Analysis from './components/Analysis';

function App() {
  return (
    <>
      <Router basename='/Shelter-UI'>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/key1' element={<Request/>}></Route>
          <Route path='/key2' element={<GenerateKey/>}></Route>
          <Route path='/analysis' element={<Analysis/>}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
