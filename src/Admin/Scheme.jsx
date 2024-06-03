import axios from 'axios';
import React, { useState } from 'react';
import './Scheme.css'; // Import the CSS file
import Footer from '../Footer/Footer';
import AdminHome from './AdminHome';

function Scheme() {
    const [scheme, setScheme] = useState({
        nbfc: "",
        interestRate: "",
        loanAmount: "",
    });
 
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(scheme);
        await axios.post("http://localhost:1234/AddSchemes", scheme);
        // navigate("/");
    }

    const onInputChange = (e) => {
        setScheme({ ...scheme, [e.target.name]: e.target.value });
        console.log(scheme);
    }
 
    return (
        <div>
           <AdminHome />
        <div className="card scheme-card">
            <div className="card-body">
                <img src="https://t3.ftcdn.net/jpg/05/01/61/66/240_F_501616642_cBaVOyTrPMyUlIx7XZ6YU3ZobMlDIT6J.jpg" alt="Logo" className="form-logo" /> {/* Add your logo here */}
                <h2 className="card-title">Non-Banking Financial Schemes</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="nbfc" className="form-label">
                            NBFC:
                        </label>
                        <input
                            type="text"
                            name="nbfc"
                            className="form-control"
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="interestRate" className="form-label">
                                Interest Rate:
                            </label>
                            <input
                                type="text"
                                name="interestRate"
                                className="form-control"
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="loanAmount" className="form-label">
                                Loan Amount:
                            </label>
                            <input
                                type="text"
                                name="loanAmount"
                                className="form-control"
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    <br></br>
                    <input
                        type="submit"
                        className="btn btn-success btn-send pt-2 btn-block"
                        value="Submit Details"
                    />
                    
                </form>
            </div>
           
        </div>
        <Footer />
        </div>
        
    );
    
}

export default Scheme;
