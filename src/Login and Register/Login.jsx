// import React, { useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import './login.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
 
// function Login() {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
 
//   const navigate = useNavigate();
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(userEmail);
//     console.log(userPassword);
// const login = await axios.get(`http://localhost:1234/userLogin/${userEmail}/${userPassword}`)
//       .then((res) => {
//         sessionStorage.setItem("userName", res.data.userName);
//         sessionStorage.setItem("userId", res.data.userId);
//         sessionStorage.setItem("userEmail", res.data.userEmail);
//         if (res.data.userEmail === "admin@gmail.com" && res.data.userPassword === "Admin123") {
//           navigate("/content");
//         } else {
//           navigate("/");
//         }
//       });
//   }
 
//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   }
 
//   return (
//     <div className='container bg-color-white'>
//       <section className="vh-100">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-sm-6 text-black">
//               <div className="px-5 ms-xl-4">
//                 <i className="fas fa-crown fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#0000FF' }} />
//                 <span className="h1 fw-bold mb-0">Welcome</span>
//               </div>
//               <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
//                 <form style={{ width: '23rem' }} onSubmit={handleSubmit}>
//                   <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
//                   <div className="form-outline mb-4">
//                     <input
//                       type="email"
//                       id="form2Example18"
//                       name='userEmail'
//                       className="form-control form-control-lg"
//                       onChange={(e) => setUserEmail(e.target.value)}
//                     />
//                     <label className="form-label" htmlFor="form2Example18">Email address</label>
//                   </div>
//                   <div className="form-outline mb-4 position-relative">
//                     <input
//                       type={passwordVisible ? 'text' : 'password'}
//                       id="form2Example28"
//                       name='userPassword'
//                       className="form-control form-control-lg"
//                       onChange={(e) => setUserPassword(e.target.value)}
//                     />
//                     <label className="form-label" htmlFor="form2Example28">Password</label>
//                     <i
//                       className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} password-icon`}
//                       onClick={togglePasswordVisibility}
//                       style={{
//                         position: 'absolute',
//                         top: '50%',
//                         right: '10px',
//                         cursor: 'pointer',
//                         transform: 'translateY(-50%)'
//                       }}
//                     />
//                   </div>
//                   <div className="pt-1 mb-4">
//                     <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
//                   </div>
//                   <p>Don't have an account? <Link to={`/signup`}>Register here</Link></p>
//                 </form>
//               </div>
//             </div>
//             <div className="col-sm-6 px-0 d-none d-sm-block">
// <img src="https://img.freepik.com/free-vector/youth-business-man-holding-money_1308-140515.jpg"
//                 alt="Login image" className="w-100 vh-100" style={{ objectFit: 'crop', objectPosition: 'left' }} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
 
// export default Login;


import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
 
function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
 
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userEmail);
    console.log(userPassword);
    
    try {
const res = await axios.get(`http://localhost:1234/userLogin/${userEmail}/${userPassword}`);
      if (res.data.userEmail) {
        sessionStorage.setItem("userName", res.data.userName);
        sessionStorage.setItem("userId", res.data.userId);
        sessionStorage.setItem("userEmail", res.data.userEmail);
        if (res.data.userEmail === "admin@gmail.com" && res.data.userPassword === "Admin123") {
          navigate("/content");
        } else {
          navigate("/");
        }
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password. Please try again.',
      });
    }
  }
 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }
 
  return (
    <div className='container bg-color-white'>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <i className="fas fa-crown fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#0000FF' }} />
                <span className="h1 fw-bold mb-0">Welcome</span>
              </div>
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: '23rem' }} onSubmit={handleSubmit}>
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example18"
                      name='userEmail'
                      className="form-control form-control-lg"
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder=" " 
                    />
                    <label className="form-label" htmlFor="form2Example18">Email address</label>
                  </div>
                  <div className="form-outline mb-4 position-relative">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      id="form2Example28"
                      name='userPassword'
                      className="form-control form-control-lg"
                      onChange={(e) => setUserPassword(e.target.value)}
                      placeholder=" " 
                    />
                    <label className="form-label" htmlFor="form2Example28">Password</label>
                    <i
                      className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} password-icon`}
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                  <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" type="submit">Login</button>
                  </div>
                  <p>Don't have an account? <Link to={`/signup`}>Register here</Link></p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
<img src="https://img.freepik.com/free-vector/youth-business-man-holding-money_1308-140515.jpg"
                alt="Login image" className="w-100 vh-100" style={{ objectFit: 'crop', objectPosition: 'left' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default Login;