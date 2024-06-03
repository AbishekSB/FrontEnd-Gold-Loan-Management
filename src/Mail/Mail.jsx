import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import AdminHome from '../Admin/AdminHome';
import axios from 'axios';

export default function Mail() {
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    try {
      const res = await axios.get("http://localhost:1234/getAllDetailsOfPayment");
      setPayment(res.data);
    } catch (error) {
      console.error("Error fetching payment details:", error);
    }
  };

  const calculateInterest = (principal, rate, time) => {
    const interest = (principal * rate * time) / 100;
    return interest;
  };

  const sendEmail = async (pay) => {
    const formData = new FormData();

    const interest = calculateInterest(pay.amount, 5, 5);
    const totalAmount = pay.amount + interest;
    console.log(`Total amount (Principal + Interest): ${totalAmount}`);

    formData.append("email", pay.loanApplication.email);
    formData.append("name", pay.loanApplication.fullName);
    formData.append("amount", pay.amount);
    formData.append("rate", 5);
    formData.append("period", 5);
    formData.append("interest", totalAmount);

    try {
      await axios.post("http://localhost:1234/api/rest/sendEmailOTP", formData);
      alert("Mail sent");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div>
      <AdminHome />
      <MDBTable hover>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>NBFC</th>
            <th scope='col'>Interest Rate</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Tenure</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {payment.map((pay, index) => (
            <tr key={pay.paymentId}>
              <td>{pay.paymentId}</td>
              <td>{pay.loanApplication.fullName}</td>
              <td>{pay.loanApplication.email}</td>
              <td>{pay.scheme.nbfc}</td>
              <td>{pay.interestRate}</td>
              <td>{pay.amount}</td>
              <td>{pay.tenure}</td>
              <td>
                <MDBBtn floating tag='a' onClick={() => sendEmail(pay)}>
                  <MDBIcon fas icon="paper-plane" />
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

