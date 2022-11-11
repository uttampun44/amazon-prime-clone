import './App.css';
import Nav from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Signup from './Components/signup/Sign'
import Createaccount from './Components/Create Account/Createaccount';
function App() {
  return (
  
     <BrowserRouter>
     <div className="App">
        <Routes>
          <Route path='/' element={<Nav />}></Route>
           <Route path='signup' element={<Signup />}></Route>
           <Route path='createaccount' element={<Createaccount />}></Route>
        </Routes>
     </div> 
     </BrowserRouter>
   
  );
}

export default App;
