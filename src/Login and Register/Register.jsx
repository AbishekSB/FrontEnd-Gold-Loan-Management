import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    userName: '',
    userEmail: '',
    userPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:1234/registerUser", register);
    
    navigate("/login")
  }

  const onInputChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
    console.log(register);
  }

  return (
    <section className="background-radial-gradient overflow-hidden">
      <style>
        {`
          .background-radial-gradient {
            background-color: hsl(218, 41%, 15%);
            background-image: radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%);
          }
          #radius-shape-1 {
            height: 220px;
            width: 220px;
            top: -60px;
            left: -130px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }
          #radius-shape-2 {
            border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
            bottom: -60px;
            right: -110px;
            width: 300px;
            height: 300px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }
          .bg-glass {
            background-color: hsla(0, 0%, 100%, 0.9) !important;
            backdrop-filter: saturate(200%) blur(25px);
          }
          .form-outline {
            position: relative;
            margin-bottom: 1.5rem;
          }
          .form-control {
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          }
          .form-control:focus {
            color: #495057;
            background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          }
          .form-label {
            position: absolute;
            top: 0;
            left: 0;
            padding: 0.75rem 1rem;
            pointer-events: none;
            transition: all 0.2s ease-out;
            color: #6c757d;
          }
          .form-control:focus + .form-label,
          .form-control:not(:placeholder-shown) + .form-label {
            top: -0.75rem;
            left: 0.75rem;
            font-size: 0.75rem;
            color: #495057;
            background: white;
            padding: 0 0.25rem;
          }
          .btn {
            padding: 0.75rem 1.25rem;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5;
            border-radius: 0.3rem;
            transition: all 0.2s ease-in-out;
          }
          .btn-primary {
            color: #fff;
            background-color: #007bff;
            border-color: #007bff;
          }
          .btn-primary:hover {
            color: #fff;
            background-color: #0056b3;
            border-color: #004085;
          }
          .btn-link {
            color: #007bff;
            text-decoration: none;
          }
          .btn-link:hover {
            color: #0056b3;
            text-decoration: underline;
          }
        `}
      </style>
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
              The best offer <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          name='userName'
                          onChange={(e) => onInputChange(e)}
                          pattern="^[A-Za-z0-9]{3,16}$"
                          required
                          placeholder=" "
                        />
                        <label className="form-label" htmlFor="form3Example2">User Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name='userEmail'
                      onChange={(e) => onInputChange(e)}
                      required
                      placeholder=" "
                    />
                    <label className="form-label" htmlFor="form3Example3">Email Address</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      name='userPassword'
                      onChange={(e) => onInputChange(e)}
                      pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                      required
                      placeholder=" "
                    />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>
                  <button type="submit"  className="btn btn-primary btn-block mb-4" style={{ width: '100%' }}>
                    Sign up
                  </button>
                  
                  <div className="text-center">
                    <Link to={`/login`} className="btn-link">Login</Link>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
