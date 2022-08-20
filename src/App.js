import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import AddProduct from './components/AddProduct/AddProduct';
import ManageAllProduct from './components/ManageAllProduct/ManageAllProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/manageProduct' element={<ManageAllProduct></ManageAllProduct>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
