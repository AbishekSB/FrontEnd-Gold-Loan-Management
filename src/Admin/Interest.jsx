// import React, { useEffect, useState } from 'react';
// import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
// import axios from 'axios';
// import AdminHome from './AdminHome';
// import Footer from '../Footer/Footer';

// const OrderForm = () => {
//     const [schemes, setSchemes] = useState([]);
//     const [applicants, setApplicants] = useState([]);
//     const [applicantEmails, setApplicantEmails] = useState([]);
//     const [formData, setFormData] = useState({
//         interestRate: '',
//         tenure: '',
//         amount: '',
//         scheme: {
//             id: '',
//             nbfc: '',
//             interestRate: '',
//             loanAmount: ''
//         },
//         loanApplication: {
//             loanId: '', fullName: '', birthDay: '', gender: '', email: '', address: '', contactNumber: '', maritalStatus: '', loanAmount: '', purposeOfLoan: '', repaymentPeriod: '', paymentFrequency: '', goldDescription: '', bankAccHolderName: '', bankName: '', branch: '', accNumber: '', ifscCode: '', referenceOne: '', referenceTwo: '', status: ''
//         }
//     });

//     useEffect(() => {
//         loadSchemeDetails();
//         loadEmailDetails();
//         loadApplicantDetails();
//     }, []);

//     const loadSchemeDetails = async () => {
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

//     const loadEmailDetails = async () => {
//         try {
//             const emailResponse = await axios.get("http://localhost:1234/getEmailList");
//             const idResponse = await axios.get("http://localhost:1234/getApplicantId");

//             const options = emailResponse.data.map((email, index) => ({
//                 loanId: idResponse.data[index],
//                 email: email
//             }));

//             setApplicantEmails(options);
//         } catch (error) {
//             console.error('Error loading email details:', error);
//         }
//     };

//     const loadApplicantDetails = async () => {
//         try {
//             const response = await axios.get("http://localhost:1234/getApplicantName");
//             setApplicants(response.data);
//         } catch (error) {
//             console.error('Error loading applicant details:', error);
//         }
//     };

//     const onInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSchemeChange = (e) => {
//         const selectedScheme = schemes.find(scheme => scheme.id === parseInt(e.target.value, 10));
//         setFormData({ ...formData, scheme: selectedScheme });
//     };

//     const handleFullNameChange = (e) => {
//         const selectedFullName = applicants.find(applicant => applicant === e.target.value);
//         setFormData({ ...formData, loanApplication: { ...formData.loanApplication, fullName: selectedFullName } });
//     };

//     const handleEmailChange = (e) => {
//         const selectedEmail = applicantEmails.find(email => email.loanId === parseInt(e.target.value, 10));
//         setFormData({ ...formData, loanApplication: { ...formData.loanApplication, email: selectedEmail.email, loanId: selectedEmail.loanId } });
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const result = await axios.post("http://localhost:1234/addPaymentDetails", formData);
//             console.log(result.data);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     return (
//         <div>
//             <AdminHome />
//         <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//             <MDBCard className="shadow-5" style={{ maxWidth: '500px', width: '100%' }}>
//                 <MDBCardBody>
//                     <MDBCardTitle className="mb-4 text-center">Place Your Order</MDBCardTitle>
//                     <form onSubmit={onSubmit}>
//                         <MDBRow className="mb-4">
//                             <MDBCol>
//                                 <select
//                                     onChange={handleSchemeChange}
//                                     name="schemeId"
//                                     className="form-control"
//                                     required
//                                     value={formData.scheme.id}
//                                 >
//                                     <option value=''>NBFC</option>
//                                     {schemes.map((scheme) => (
//                                         <option key={scheme.id} value={scheme.id}>
//                                             {scheme.NBFC}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </MDBCol>

//                             <MDBCol>
//                                 <select
//                                     onChange={handleFullNameChange}
//                                     name="fullName"
//                                     className="form-control"
//                                     required
//                                     value={formData.loanApplication.id}
//                                 >
//                                     <option value=''>Name</option>
//                                     {applicants.map((applicant, index) => (
//                                         <option key={index.id} value={applicant}>
//                                             {applicant}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </MDBCol>
//                         </MDBRow>

//                         <select
//                             onChange={handleEmailChange}
//                             name="email"
//                             className="form-control"
//                             required
//                             value={formData.loanApplication.loanId}
//                         >
//                             <option value=''>Email</option>
//                             {applicantEmails.map((email, index) => (
//                                 <option key={index} value={email.loanId}>
//                                     {email.email}
//                                 </option>
//                             ))}
//                         </select>
//                         <br />

//                         <MDBInput
//                             className="mb-4"
//                             label="Interest Rate"
//                             type="text"
//                             name="interestRate"
//                             onChange={onInputChange}
//                             value={formData.interestRate}
//                         />

//                         <MDBInput
//                             className="mb-4"
//                             label="Tenure"
//                             type="text"
//                             name="tenure"
//                             onChange={onInputChange}
//                             value={formData.tenure}
//                         />

//                         <MDBInput
//                             className="mb-4"
//                             label="Amount"
//                             type="text"
//                             name="amount"
//                             onChange={onInputChange}
//                             value={formData.amount}
//                         />

//                         <MDBBtn type="submit" className="btn-block mb-4">
//                             Submit
//                         </MDBBtn>
//                     </form>
//                 </MDBCardBody>
//             </MDBCard>
//         </div>
//         <Footer />
//         </div>
//     );
// };

// export default OrderForm;

import React, { useEffect, useState } from 'react';
import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import axios from 'axios';
import AdminHome from './AdminHome';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';

const OrderForm = () => {
    const [schemes, setSchemes] = useState([]);
    const [applicants, setApplicants] = useState([]);
    const [applicantEmails, setApplicantEmails] = useState([]);
    const [formData, setFormData] = useState({
        interestRate: '',
        tenure: '',
        amount: '',
        scheme: {
            id: '',
            nbfc: '',
            interestRate: '',
            loanAmount: ''
        },
        loanApplication: {
            loanId: '', 
            fullName: '', 
            birthDay: '', 
            gender: '', 
            email: '', 
            address: '', 
            contactNumber: '', 
            maritalStatus: '', 
            loanAmount: '', 
            purposeOfLoan: '', 
            repaymentPeriod: '', 
            paymentFrequency: '', 
            goldDescription: '', 
            bankAccHolderName: '', 
            bankName: '', 
            branch: '', 
            accNumber: '', 
            ifscCode: '', 
            referenceOne: '', 
            referenceTwo: '', 
            status: ''
        }
    });

    useEffect(() => {
        loadSchemeDetails();
        loadEmailDetails();
        loadApplicantDetails();
    }, []);

    const loadSchemeDetails = async () => {
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

    const loadEmailDetails = async () => {
        try {
            const emailResponse = await axios.get("http://localhost:1234/getEmailList");
            const idResponse = await axios.get("http://localhost:1234/getApplicantId");

            const options = emailResponse.data.map((email, index) => ({
                loanId: idResponse.data[index],
                email: email
            }));

            setApplicantEmails(options);
        } catch (error) {
            console.error('Error loading email details:', error);
        }
    };

    const loadApplicantDetails = async () => {
        try {
            const response = await axios.get("http://localhost:1234/getApplicantName");
            setApplicants(response.data);
        } catch (error) {
            console.error('Error loading applicant details:', error);
        }
    };

    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSchemeChange = (e) => {
        const selectedScheme = schemes.find(scheme => scheme.id === parseInt(e.target.value, 10));
        setFormData({ ...formData, scheme: selectedScheme });
    };

    const handleFullNameChange = (e) => {
        const selectedFullName = applicants.find(applicant => applicant === e.target.value);
        setFormData({
            ...formData, 
            loanApplication: {
                ...formData.loanApplication, 
                fullName: selectedFullName 
            }
        });
    };

    const handleEmailChange = (e) => {
        const selectedEmail = applicantEmails.find(email => email.loanId === parseInt(e.target.value, 10));
        if (selectedEmail) {
            setFormData({
                ...formData, 
                loanApplication: {
                    ...formData.loanApplication, 
                    email: selectedEmail.email, 
                    loanId: selectedEmail.loanId 
                }
            });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:1234/addPaymentDetails", formData);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Order placed successfully!',
            });
            console.log(result.data);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error placing your order. Please try again.',
            });
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div>
            <AdminHome />
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <MDBCard className="shadow-5" style={{ maxWidth: '500px', width: '100%' }}>
                    <MDBCardBody>
                        <MDBCardTitle className="mb-4 text-center">Interest</MDBCardTitle>
                        <form onSubmit={onSubmit}>
                            <MDBRow className="mb-4">
                                <MDBCol>
                                    <select
                                        onChange={handleSchemeChange}
                                        name="schemeId"
                                        className="form-control"
                                        required
                                        value={formData.scheme.id}
                                    >
                                        <option value=''>NBFC</option>
                                        {schemes.map((scheme) => (
                                            <option key={scheme.id} value={scheme.id}>
                                                {scheme.NBFC}
                                            </option>
                                        ))}
                                    </select>
                                </MDBCol>

                                <MDBCol>
                                    <select
                                        onChange={handleFullNameChange}
                                        name="fullName"
                                        className="form-control"
                                        required
                                        value={formData.loanApplication.fullName}
                                    >
                                        <option value=''>Name</option>
                                        {applicants.map((applicant, index) => (
                                            <option key={index} value={applicant}>
                                                {applicant}
                                            </option>
                                        ))}
                                    </select>
                                </MDBCol>
                            </MDBRow>

                            <select
                                onChange={handleEmailChange}
                                name="email"
                                className="form-control"
                                required
                                value={formData.loanApplication.loanId}
                            >
                                <option value=''>Email</option>
                                {applicantEmails.map((email, index) => (
                                    <option key={index} value={email.loanId}>
                                        {email.email}
                                    </option>
                                ))}
                            </select>
                            <br />

                            <MDBInput
                                className="mb-4"
                                label="Interest Rate"
                                type="text"
                                name="interestRate"
                                onChange={onInputChange}
                                value={formData.interestRate}
                            />

                            <MDBInput
                                className="mb-4"
                                label="Tenure"
                                type="text"
                                name="tenure"
                                onChange={onInputChange}
                                value={formData.tenure}
                            />

                            <MDBInput
                                className="mb-4"
                                label="Amount"
                                type="text"
                                name="amount"
                                onChange={onInputChange}
                                value={formData.amount}
                            />

                            <MDBBtn type="submit" className="btn-block mb-4">
                                Submit
                            </MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <Footer />
        </div>
    );
};

export default OrderForm;




