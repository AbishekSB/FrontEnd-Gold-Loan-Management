import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import Navbar from './Navbar';


function ApplicationDetailsOfCust() {
  
   
  const [application, setApplication] = useState("");
  const userId = sessionStorage.getItem("userId");
 
  useEffect(() => {
    axios
      .get(`http://localhost:1234/findApplicationOfUser?userId=${userId}`)
      .then((res) => {
        setApplication(res.data);
      })
      .catch((error) => {
        console.error("Error fetching application:", error);
      });
  }, []);
 
  return (
    <div>
     <Navbar />
    <Container className="mt-4">
      <h2 className="text-center mb-4"> Application Details</h2>
      <Card className="shadow">
        <Card.Body>
          <Row>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <b><h3 style={{fontSize:"30px",textShadow:" px 2px"}}>Personal Information</h3></b>
                  <p><strong>Name:</strong> {application.fullName}</p>
                  <p><strong>Date of Birth:</strong> {application.birthDay}</p>
                  <p><strong>Gender:</strong> {application.gender}</p>
                  <p><strong>Email:</strong> {application.email}</p>
                  <p><strong>Address:</strong> {application.address}</p>
                  <p><strong>Contact Number:</strong> {application.contactNumber}</p>
                  <p><strong>Martial Status:</strong> {application.maritalStatus}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <h3>Loan Information</h3>
                  <p><strong>Loan Amount:</strong> {application.loanAmount}</p>
                  <p><strong>Purpose of Loan:</strong> {application.purposeOfLoan}</p>
                  <p><strong>Repayment Period:</strong> {application.repaymentPeriod}</p>
                  <p><strong>Payment Frequency</strong> {application.paymentFrequency}</p>
                 
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <h3>Pledge and Reference Information</h3>
                  <p><strong>Gold Description:</strong> {application.goldDescription}</p>
                  <p><strong>Reference One:</strong> {application.referenceOne}</p>
                  <p><strong>Reference Two:</strong> {application.referenceTwo}</p>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <h3>Bank Information</h3>
                  <p><strong>Account No</strong> {application.accNumber}</p>
                  <p><strong>IfSC</strong> {application.ifscCode}</p>
                  <p><strong>Account Holder Name:</strong> {application.bankAccHolderName}</p>
                  <p><strong>Bank Name</strong> {application.bankName}</p>
                  <p><strong>Branch:</strong>{application.branch}</p>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Card border="primary" className="mb-3">
                <Card.Body>
                  <h3>Additional Information</h3>
                  <p><strong>Status:</strong> {application.status}</p>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
            {application.status === "Pending" ? (
    <Card border="primary" className="mb-3">
      <Card.Body>
        <h3>Application Status description</h3>
        <p ><strong>Your application   has been waitlisted. We'll keep you updated if a spot becomes available.</strong> </p>
       
      </Card.Body>
    </Card>
  ) : application.status === 'On Progress' ? (
    <Card border="primary" className="mb-3">
      <Card.Body>
      <h3>Application Status description</h3>
        <p style={{color:"blue"}}><strong>"Your college application is confirmed! Please report to the Bank on 31/07/2024 to complete the admission process. Welcome to the college community!"</strong> </p>
       
      </Card.Body>
    </Card>
  ) : application.status === 'Approved' ? (
    <Card border="primary" className="mb-3">
      <Card.Body>
      <h3>Application Status description</h3>
        <p style={{color:""}}><strong>Congratulations! Your application has been approved.Get your Loan on 02/07/2024 We need to verify your documents. We look forward to seeing you then!</strong></p>
        <p style={{color:"Green"}}>Note!! take your original documents</p>
 
      </Card.Body>
    </Card>
  ) : (
    <Card border="primary" className="mb-3">
      <Card.Body>
      <h3>Application Status description</h3>
        <p style={{color:"Red"}}><strong>Thank you for your application. Regrettably, we won't be moving forward at this time.</strong> </p>
      </Card.Body>
    </Card>
  )}
 
</Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    </div>
    
  );
}
 
export default ApplicationDetailsOfCust;