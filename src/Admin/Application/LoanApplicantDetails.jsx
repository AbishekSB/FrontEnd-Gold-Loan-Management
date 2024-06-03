import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoanApplicantDetails.css';
import AdminHome from '../AdminHome';
import Footer from '../../Footer/Footer';
import Swal from 'sweetalert2';
import { Modal, Button, Form } from 'react-bootstrap';

function LoanApplicantDetails() {
    const [viewApplicant, setViewApplicant] = useState({});
    const [applicantId, setApplicantId] = useState("");
    const [idList, setIdList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        loadIdList();
    }, []);

    const loadIdList = async () => {
        const result = await axios.get("http://localhost:1234/getApplicantId");
        console.log(result.data);
        setIdList(result.data);
    };

    const onsubmit = async (e) => {
        console.log(applicantId);
        e.preventDefault();
        const res = await axios.get(`http://localhost:1234/getApplicantById/${applicantId}`);
        console.log(res.data);
        setViewApplicant(res.data);
        setStatus(res.data.status);
        setIsDisabled(res.data.status === "Approved" || res.data.status === "Reject");
        setShowModal(true);
    };

    const handleApprove = async () => {
        try {
            let updatedStatus;
            if (status === "Pending") {
                updatedStatus = "On Progress";
            } else if (status === "On Progress") {
                updatedStatus = "Approved";
                setIsDisabled(true);
            }

            const updatedApplicant = { ...viewApplicant, status: updatedStatus };
            await axios.put("http://localhost:1234/updateApplicant", updatedApplicant);

            Swal.fire("Success!", `Status updated to ${updatedStatus}`, "success");

            if (updatedStatus === "Approved") {
                setIdList(idList.filter(id => id !== applicantId));
                setApplicantId("");
                setShowModal(false);
            } else {
                setStatus(updatedStatus);
            }
        } catch (error) {
            console.error("There was an error updating the status!", error);
            Swal.fire("Error!", "There was an error updating the status!", "error");
        }
    };

    const handleReject = async () => {
        try {
            const updatedApplicant = { ...viewApplicant, status: "Reject" };
            await axios.put("http://localhost:1234/updateApplicant", updatedApplicant);

            Swal.fire("Success!", `Status updated to Reject`, "success");

            setIdList(idList.filter(id => id !== applicantId));
            setApplicantId("");
            setShowModal(false);
        } catch (error) {
            console.error("There was an error updating the status!", error);
            Swal.fire("Error!", "There was an error updating the status!", "error");
        }
    };

    return (
        <div>
            <AdminHome />   
            <MDBContainer>
                <div className='text-center mt-5'>
                    <h1 className='display-4'>View Applicant Details</h1>
                </div>
                <MDBRow className='justify-content-center mt-5'>
                    <MDBCol md='8' lg='6'>
                        <MDBCard className='card-custom'>
                            <MDBCardBody>
                                <form onSubmit={onsubmit}>
                                    <div className='form-group'>
                                        <label htmlFor="form_need" className='form-label'>
                                            Please Select the ID you need
                                        </label>
                                        <select
                                            className='form-select'
                                            onChange={(e) => setApplicantId(e.target.value)}
                                            id="form_need"
                                            name="need"
                                            required
                                            value={applicantId}
                                        >
                                            <option value="" disabled>
                                                --Select Your ID To View--
                                            </option>
                                            {idList.map((x) => (
                                                <option key={x} value={x}>
                                                    {x}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <MDBBtn type='submit' className="btn-block mt-3" color='success'>
                                        View Details
                                    </MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Applicant Details</Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>
                        <Form>
                            {Object.keys(viewApplicant).map((key) => {
                                if (key === "scheme") {
                                    return Object.keys(viewApplicant.scheme).map((schemeKey) => (
                                        <Form.Group className='mb-3' key={schemeKey}>
                                            <Form.Label>
                                                {schemeKey.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })}
                                            </Form.Label>
                                            <Form.Control type="text" readOnly value={viewApplicant.scheme[schemeKey]} />
                                        </Form.Group>
                                    ));
                                }
                                return (
                                    <Form.Group className='mb-3' key={key}>
                                        <Form.Label>
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })}
                                        </Form.Label>
                                        <Form.Control type="text" readOnly value={viewApplicant[key]} />
                                    </Form.Group>
                                );
                            })}
                            <Form.Group className="mb-3">
                                <Form.Label>Status</Form.Label>
                                <Form.Control type="text" readOnly value={status} />
                            </Form.Group>
                        </Form>
                    </Modal.Body> */}
                    <Modal.Body>
    <Form>
        {/* Display Loan Application Fields */}
        {Object.keys(viewApplicant).map((key) => {
            if (key === "scheme" || key === "user") {
                return Object.keys(viewApplicant[key]).map((subKey) => (
                    <Form.Group className='mb-3' key={subKey}>
                        <Form.Label>
                            {subKey.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })}
                        </Form.Label>
                        <Form.Control type="text" readOnly value={viewApplicant[key][subKey]} />
                    </Form.Group>
                ));
            }
            return (
                <Form.Group className='mb-3' key={key}>
                    <Form.Label>
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) { return str.toUpperCase(); })}
                    </Form.Label>
                    <Form.Control type="text" readOnly value={viewApplicant[key]} />
                </Form.Group>
            );
        })}
        <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" readOnly value={status} />
        </Form.Group>
    </Form>
</Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={handleReject} disabled={isDisabled}>
                            Reject
                        </Button>
                        <Button variant="primary" onClick={handleApprove} disabled={isDisabled}>
                            {status === "On Progress" ? "Approve" : "Update Status"}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </MDBContainer>
            <Footer />
        </div>
    );
}

export default LoanApplicantDetails;





