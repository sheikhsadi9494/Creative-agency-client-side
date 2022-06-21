import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import AddService from './Pages/Dashbord/AddService/AddService';
import Dashbord from './Pages/Dashbord/Dashbord/Dashbord';
import DeleteService from './Pages/Dashbord/DeleteService/DeleteService';
import MakeAdmin from './Pages/Dashbord/MakeAdmin/MakeAdmin';
import OrderList from './Pages/Dashbord/OrderList/OrderList';
import Orders from './Pages/Dashbord/Orders/Orders';
import Reviews from './Pages/Dashbord/Reviews/Reviews';
import HomeContainer from './Pages/Home/HomeContainer/HomeContainer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ServicesDetails from './Pages/ServicesPage/ServiceDetails/ServicesDetails';
import ServicesContainer from './Pages/ServicesPage/ServicesContainer/ServicesContainer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<HomeContainer/>}/>
          <Route path='home' element={<HomeContainer/>}/>
          <Route path='services' element={<ServicesContainer/>}/>
          <Route path='services/:servicesId' element={<PrivateRoute><ServicesDetails/></PrivateRoute>}/>
          <Route path='dashbord' element={<PrivateRoute><Dashbord/></PrivateRoute>}>
            <Route index element={<Orders/>}/>
            <Route path='review' element={<Reviews/>}/>
            <Route path='makeAdmin' element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
            <Route path='orderList' element={<AdminRoute><OrderList/></AdminRoute>}/>
            <Route path='addService' element={<AdminRoute><AddService/></AdminRoute>}/>
            <Route path='deleteService' element={<AdminRoute><DeleteService/></AdminRoute>}/>
          </Route>
          <Route path='login' element={<Login></Login>}/>
          <Route path='register' element={<Register></Register>}/>
       </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
