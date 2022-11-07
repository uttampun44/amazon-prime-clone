import './App.css';
import Nav from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Signup from './Components/signup/Sign'
import Main from './Components/Main/Main'
function App() {
  return (
  
     <BrowserRouter>
     <div className="App">
        <Routes>
          <Route path='/' element={<Nav />}></Route>
           <Route path='signup' element={<Signup />}></Route>
        </Routes>
     </div> 
     </BrowserRouter>
   
  );
}

export default App;
