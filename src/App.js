
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
import AuthProvider from './Components/Contexts/AuthProvider';
import Details from './Components/Pages/Games/Details';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import PersistentDrawerLeft from './Components/Pages/Dashboard/Dashboard';
import DashboardHoeme from './Components/Pages/Dashboard/Home/DashboardHoeme';
import ManageOrders from './Components/Pages/Dashboard/ManageOrders/ManageOrders';
import AddReview from './Components/Pages/Dashboard/AddReview/AddReview';
import Myorders from './Components/Pages/Dashboard/MyOrders/Myorders';
import AddNew from './Components/Pages/Dashboard/AddNew/AddNew';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import Payment from './Components/Pages/Dashboard/payment/Payment'
import AllGames from './Components/Pages/Dashboard/ManageOrders/AllOrders/AllGames';


function App() {
  return (
 
    <AuthProvider>
      <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route index element={<Home />} />
    <Route path='login' element={<Login />} />
    <Route path='signup' element={<SignUp />} />
    <Route path='games' element={<Games />} />
    <Route
            path='games/:id'
            element={
              <PrivateRoute>
                {' '}
                <Details/>
              </PrivateRoute>
            }
          ></Route>
           <Route path='dashboard'
            element={<PersistentDrawerLeft />}>
            <Route path={'/dashboard'} element={<DashboardHoeme />}></Route>
            <Route path='manage' element={<ManageOrders />} />
            <Route path='all' element={<AllGames />} />
            <Route path='addReview' element={<AddReview />}></Route>
            <Route path='orders' element={<Myorders />}></Route>
            <Route path='newproduct' element={<AddNew />}></Route>
            <Route path='makeadmin' element={<MakeAdmin />}></Route>
            <Route path='orders/payment/:productId' element={<Payment />}></Route>
           
          </Route>
    <Route path='about' element={<About />} />
    <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
