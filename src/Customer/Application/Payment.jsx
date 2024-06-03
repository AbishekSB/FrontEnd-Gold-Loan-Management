// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AddPayment = () => {
//     const name = sessionStorage.getItem("userName") || '';
//     const email = sessionStorage.getItem("userEmail") || '';

//     const [schemes, setSchemes] = useState([]);
//     const [payment, setPayment] = useState({
//         name: name,
//         emailId: email,
//         amount: '',
//         mobileNumber: '',
//         accountNumber: '',
//         cardName: '',
//         expiryDate: '',
//         scheme: {
//             id: '',
//             nbfc: '',
//             interestRate: '',
//             loanAmount: ''
//         },
//     });

//     useEffect(() => {
//         loadSchemeId();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setPayment(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleScroll = (e) => {
//         const selectedScheme = schemes.find(scheme => scheme.id === parseInt(e.target.value, 10));
//         setPayment(prevState => ({
//             ...prevState,
//             scheme: selectedScheme ? selectedScheme : prevState.scheme
//         }));
//     };

//     const loadSchemeId = async () => {
//         try {
//             const nameResponse = await axios.get("http://localhost:1234/getSchemeNameList");
//             const idResponse = await axios.get("http://localhost:1234/getSchemeId");
      
//             const options = nameResponse.data.map((name, index) => ({
//                 id: idResponse.data[index],
//                 NBFC: name
//             }));
      
//             setSchemes(options);
//         } catch (error) {
//             console.error('Error loading schemes:', error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:1234/addPaymentDetails", payment);
//             console.log("Payment added successfully:", res.data);
//         } catch (error) {
//             console.error("Error adding payment:", error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label>Name:</label>
//                 <input type="text" name="name" value={payment.name} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Email ID:</label>
//                 <input type="email" name="emailId" value={payment.emailId} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Amount:</label>
//                 <input type="number" name="amount" value={payment.amount} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Mobile Number:</label>
//                 <input type="tel" name="mobileNumber" value={payment.mobileNumber} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Account Number:</label>
//                 <input type="text" name="accountNumber" value={payment.accountNumber} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Card Name:</label>
//                 <input type="text" name="cardName" value={payment.cardName} onChange={handleChange} required />
//             </div>
//             <div>
//                 <label>Expiry Date:</label>
//                 <input type="text" name="expiryDate" value={payment.expiryDate} onChange={handleChange} required />
//             </div>
//             <div>
//                 <select
//                     onChange={handleScroll}
//                     name="schemeId"
//                     className="form-control"
//                     required
//                     value={payment.scheme.id}
//                 >
//                     <option value=''>Select NBFC</option>
//                     {schemes.map((scheme) => (
//                         <option key={scheme.id} value={scheme.id}>
//                             {scheme.NBFC}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <button type="submit">Add Payment</button>
//         </form>
//     );
// };

// export default AddPayment;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './payment.css';

const AddPayment = () => {
    const name = sessionStorage.getItem("userName") || '';
    const email = sessionStorage.getItem("userEmail") || '';

    const [schemes, setSchemes] = useState([]);
    const [payment, setPayment] = useState({
        name: name,
        emailId: email,
        amount: '',
        mobileNumber: '',
        accountNumber: '',
        cardName: '',
        expiryDate: '',
        scheme: {
            id: '',
            nbfc: '',
            interestRate: '',
            loanAmount: ''
        },
    });

    useEffect(() => {
        loadSchemeId();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayment(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleScroll = (e) => {
        const selectedScheme = schemes.find(scheme => scheme.id === parseInt(e.target.value, 10));
        setPayment(prevState => ({
            ...prevState,
            scheme: selectedScheme ? selectedScheme : prevState.scheme
        }));
    };

    const loadSchemeId = async () => {
        try {
            const nameResponse = await axios.get("http://localhost:1234/getSchemeNameList");
            const idResponse = await axios.get("http://localhost:1234/getSchemeId");
      
            const options = nameResponse.data.map((name, index) => ({
                id: idResponse.data[index],
                NBFC: name
            }));
      
            setSchemes(options);
        } catch (error) {
            console.error('Error loading schemes:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:1234/addPaymentDetails", payment);
            Swal.fire({
                title: 'Success!',
                text: 'Payment added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            console.log("Payment added successfully:", res.data);
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Error adding payment',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error("Error adding payment:", error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg p-4 mb-5 bg-white rounded animate__animated animate__fadeIn">
                <div className="card-body">
                    <h1 className="card-title text-center mb-4">Add Payment</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" name="name" className="form-control" value={payment.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email ID:</label>
                            <input type="email" name="emailId" className="form-control" value={payment.emailId} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Amount:</label>
                            <input type="number" name="amount" className="form-control" value={payment.amount} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile Number:</label>
                            <input type="tel" name="mobileNumber" className="form-control" value={payment.mobileNumber} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Account Number:</label>
                            <input type="text" name="accountNumber" className="form-control" value={payment.accountNumber} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Card Name:</label>
                            <input type="text" name="cardName" className="form-control" value={payment.cardName} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Expiry Date:</label>
                            <input type="text" name="expiryDate" className="form-control" value={payment.expiryDate} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <select
                                onChange={handleScroll}
                                name="schemeId"
                                className="form-control"
                                required
                                value={payment.scheme.id}
                            >
                                <option value=''>Select NBFC</option>
                                {schemes.map((scheme) => (
                                    <option key={scheme.id} value={scheme.id}>
                                        {scheme.NBFC}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Add Payment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPayment;

