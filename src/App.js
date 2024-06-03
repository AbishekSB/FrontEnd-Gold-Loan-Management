import './App.css';
import HomePage from './Customer/HomePage';

import Navbar from './Customer/Navbar';
import Footer from './Footer/Footer';
import Login from './Login and Register/Login';

import Register from './Login and Register/Register';
import {Router, Routes, Route, BrowserRouter} from  'react-router-dom';
import AdminHome from './Admin/AdminHome';

import Scheme from './Admin/Scheme';
import SchemeDetail from './Admin/SchemeDetail';
import LoanApplicantDetails from './Admin/Application/LoanApplicantDetails';
import Mail from './Mail/Mail';
import AddPayment from './Customer/Application/Payment';

import Content from './Admin/Content';
import OrderForm from './Admin/Interest';
import ApplicationDetailsOfCust from './Customer/ApplicationDetailsCust';

import LoanApplicationMain from './Customer/Application/ApplicationDummy/ApplicationDetailsMain';


function App() {
  return (
    <div className="App">
      
   <BrowserRouter>
   
    
    <Routes>
    
      
       <Route path='/' element={<HomePage />} /> 
       <Route path="/signup" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/applyforloan" element={<LoanApplicationMain />} />
       <Route path="/adminHome" element={<AdminHome />} />
       <Route path="/scheme" element={<Scheme />} />
       <Route path="/editandDetail" element={<SchemeDetail />} />
       <Route path='/loanApplicant' element={<LoanApplicantDetails />} />
       <Route path='/mail' element={<Mail />} />
       <Route path='/payment' element={<AddPayment />} />
      
       <Route path='/content' element={<Content />} />
       <Route path='/interest' element={<OrderForm />} />
       <Route path='/custDetails' element={<ApplicationDetailsOfCust />} />
    </Routes>
  
    </BrowserRouter>
 





    </div>
  );
}

export default App;
