import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Footer from '../../../Footer/Footer';
import Navbar from '../../Navbar';



const LoanApplicationMain = () => {
  const winuser = window.sessionStorage;
  const name = sessionStorage.getItem("userName");
  const winId = sessionStorage.getItem("userId");

  const [schemeOptions, setSchemeOptions] = useState([]);
  const [formData, setFormData] = useState({
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
    status: '',
    scheme: {
      id: '',
      NBFC: '',
      interestRate: '',
      loanAmount: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    loadSchemeOptions();
  }, []);

  const loadSchemeOptions = async () => {
    try {
      const nameResponse = await axios.get("http://localhost:1234/getSchemeNameList");
      const idResponse = await axios.get("http://localhost:1234/getSchemeId");

      const options = nameResponse.data.map((name, index) => ({
        id: idResponse.data[index],
        NBFC: name
      }));

      setSchemeOptions(options);
    } catch (error) {
      console.error('Error loading schemes:', error);
    }
  };

  const handleSchemeChange = (e) => {
    const selectedScheme = schemeOptions.find(scheme => scheme.id === parseInt(e.target.value, 10));
    setFormData({ ...formData, scheme: selectedScheme });
  };

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve userId from session storage
    const userId = sessionStorage.getItem('userId');

    // Check if userId exists
    if (!userId) {
      console.error('User ID is not available in session storage');
      return;
    }
    const applicationData = {
        ...formData,
        user: {
          userId: parseInt(userId)  // Ensure userId is an integer
        }
      };
  
      try {
        const result = await axios.post("http://localhost:1234/addApplicant", applicationData);
        console.log('Submission result:', result.data);
        // Store the application data in session storage (if needed)
        sessionStorage.setItem('applicationData', JSON.stringify(applicationData));
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

  return (
    <div>
      <Navbar />
      <Container className="form-container">
        <h1 className="mt-4">Gold Loan Application Form</h1>
        <Form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <>
              <h4>Applicant Details</h4>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formDateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="birthDay"
                      value={formData.birthDay}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      name="gender"
                      value={formData.gender}
                      onChange={onInputChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formMaritalStatus">
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Control
                      as="select"
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      onChange={onInputChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formPermanentAddress">
                    <Form.Label>Permanent Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="address"
                      value={formData.address}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={5}>
                  <Form.Group controlId="formMobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      min={10}
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={7}>
                  <Form.Group controlId="formEmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" onClick={handleNext} className="mt-3">
                Next
              </Button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h4>Loan Details</h4>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formLoanAmount">
                    <Form.Label>Loan Amount Required</Form.Label>
                    <Form.Control
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLoanPurpose">
                    <Form.Label>Purpose of Loan</Form.Label>
                    <Form.Control
                      type="text"
                      name="purposeOfLoan"
                      value={formData.purposeOfLoan}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formRepaymentPeriod">
                    <Form.Label>Repayment Period</Form.Label>
                    <Form.Control
                      type="text"
                      name="repaymentPeriod"
                      value={formData.repaymentPeriod}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formInterestPaymentFrequency">
                    <Form.Label>Interest Payment Frequency</Form.Label>
                    <Form.Control
                      as="select"
                      name="paymentFrequency"
                      value={formData.paymentFrequency}
                      onChange={onInputChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="annually">Annually</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formSchemeSelection">
                    <Form.Label>Select Your Scheme</Form.Label>
                    <Form.Control
                      as="select"
                      name="schemeId"
                      value={formData.scheme.id}
                      onChange={handleSchemeChange}
                      required
                    >
                      <option value=''>Select...</option>
                      {schemeOptions.map((scheme) => (
                        <option key={scheme.id} value={scheme.id}>
                          {scheme.NBFC}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="secondary" onClick={handlePrevious} className="mt-3 me-2">
                Previous
              </Button>
              <Button variant="primary" onClick={handleNext} className="mt-3">
                Next
              </Button>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h4>Gold Details</h4>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formGoldDescription">
                    <Form.Label>Description of Gold Assets</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="goldDescription"
                      value={formData.goldDescription}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formReferenceOne">
                    <Form.Label>Reference One</Form.Label>
                    <Form.Control
                      type="text"
                      name="referenceOne"
                      value={formData.referenceOne}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formReferenceTwo">
                    <Form.Label>Reference Two</Form.Label>
                    <Form.Control
                      type="text"
                      name="referenceTwo"
                      value={formData.referenceTwo}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="secondary" onClick={handlePrevious} className="mt-3 me-2">
                Previous
              </Button>
              <Button variant="primary" onClick={handleNext} className="mt-3">
                Next
              </Button>
            </>
          )}

          {currentStep === 4 && (
            <>
              <h4>Bank Details</h4>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBankAccHolderName">
                    <Form.Label>Bank Account Holder Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="bankAccHolderName"
                      value={formData.bankAccHolderName}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formBankName">
                    <Form.Label>Bank Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formBranch">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control
                      type="text"
                      name="branch"
                      value={formData.branch}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formAccNumber">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="accNumber"
                      value={formData.accNumber}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formIfscCode">
                    <Form.Label>IFSC Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={onInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="secondary" onClick={handlePrevious} className="mt-3 me-2">
                Previous
              </Button>
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </>
          )}
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default LoanApplicationMain;
