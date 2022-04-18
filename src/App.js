
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './Components/Pages/Shared/NavBar/Navbar';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Login from './Components/Pages/Login/Login';

import NotFound from './Components/Pages/NotFound/NotFound';
import Games from './Components/Pages/Games/Games';
import About from './Components/Pages/About/About';
import SignUp from './Components/Pages/SignUp/SignUp';

function App() {
  return (
 
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route index element={<Home />} />
    <Route path='login' element={<Login />} />
    <Route path='signup' element={<SignUp />} />
    <Route path='games' element={<Games />} />
    <Route path='about' element={<About />} />
    <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
