import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './navbar.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

export default function Navbar() {

  const winuser = window.sessionStorage;
  const name = sessionStorage.getItem("userName");
  const winId = sessionStorage.getItem("userId");



  const [openNavExternal, setOpenNavExternal] = useState(false);

  return (
    <>
       <MDBCollapse open={openNavExternal}>
        <div fluid className='bg-dark p-2 d-flex-row  justify-content-start  '>
        <MDBIcon fas icon="user-plus" className="blue-icon" style={{ marginRight: 8 }}/> <Link to={`/signup`}>signup</Link>
        
        <br></br>
        <MDBIcon fas icon="sign-in-alt" className="blue-icon" style={{ marginRight: 8 }} /> <Link to={`/login`}>Login</Link>
        
        </div>

      </MDBCollapse>
    
      
      <MDBNavbar dark bgColor='dark' className="sticky-top"> {/* Added sticky-top class */}
        <MDBContainer fluid>
          <div className="logo" ></div>
          <MDBNavbarBrand href='/'>
          <i class="fas fa-house"  style={{ marginRight: 8 }} ></i>  Home
          </MDBNavbarBrand>

          <MDBNavbarBrand href='/custDetails'>
          <MDBIcon fas icon="file-contract"  style={{ marginRight: 8 }} /> My Application
          </MDBNavbarBrand>
          
          
          <MDBNavbarBrand href='/applyforloan'>
          <MDBIcon fas icon="hand-holding-usd" style={{ marginRight: 8 }} />
            Apply for Loan
          </MDBNavbarBrand>

          <MDBNavbarBrand href="">
          <MDBIcon fas icon="user-circle" style={{ marginRight: 8 }} />
            Welcome {name}
          </MDBNavbarBrand>

          <MDBNavbarBrand href="/login">
          <MDBIcon fas icon="user-slash"  style={{ marginRight: 8 }} />
          </MDBNavbarBrand>

          


          <MDBNavbarToggler light bgColor='light'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavExternal(!openNavExternal)}
          >
            <i className="fas fa-bars"></i> {/* Changed class to className */}
          </MDBNavbarToggler>
          <MDBCollapse navbar id='navbarToggleExternalContent'>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
