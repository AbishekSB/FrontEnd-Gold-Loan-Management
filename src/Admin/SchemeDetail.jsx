import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';
import Footer from '../Footer/Footer';

function SchemeDetail() {
    const [schemes, setSchemes] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [currentScheme, setCurrentScheme] = useState({
        nbfc: '',
        interestRate: '',
        loanAmount: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        loadSchemes();
    }, []);

    const loadSchemes = async () => {
        try {
            const response = await axios.get("http://localhost:1234/getAllDetails");
            console.log(response.data);
            setSchemes(response.data);
        } catch (error) {
            console.error("Error fetching schemes:", error);
            alert("Failed to fetch schemes. Please try again later.");
        }
    };

    const handleEditClick = (scheme) => {
        setEditingId(scheme.id);
        setCurrentScheme(scheme);
    };

    const handleInputChange = (e) => {
        setCurrentScheme({ ...currentScheme, [e.target.name]: e.target.value });
    };

    const handleSaveClick = async (id) => {
        try {
            await axios.put(`http://localhost:1234/UpdateScheme`, currentScheme);
            setEditingId(null);
            loadSchemes();
        } catch (error) {
            console.error("Error updating scheme:", error);
            alert("Failed to update scheme. Please try again later.");
        }
    };

    return (
        <div>
            <AdminHome />
        <MDBTable align='middle'>
            <MDBTableHead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>NBFC</th>
                    <th scope='col'>Interest Rates</th>
                    <th scope='col'>Loan Payment</th>
                    <th scope='col'>Actions</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {
                    schemes.map((scheme) => (
                        <tr key={scheme.id}>
                            <td>{scheme.id}</td>
                            <td>
                                {editingId === scheme.id ? (
                                    <input
                                        type="text"
                                        name="nbfc"
                                        value={currentScheme.nbfc}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    scheme.nbfc
                                )}
                            </td>
                            <td>
                                {editingId === scheme.id ? (
                                    <input
                                        type="text"
                                        name="interestRate"
                                        value={currentScheme.interestRate}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    scheme.interestRate
                                )}
                            </td>
                            <td>
                                {editingId === scheme.id ? (
                                    <input
                                        type="text"
                                        name="loanAmount"
                                        value={currentScheme.loanAmount}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    scheme.loanAmount
                                )}
                            </td>
                            <td>
                                {editingId === scheme.id ? (
                                    <MDBBtn color='link' rounded size='sm' onClick={() => handleSaveClick(scheme.id)}>
                                        Save
                                    </MDBBtn>
                                ) : (
                                    <MDBBtn color='link' rounded size='sm' onClick={() => handleEditClick(scheme)}>
                                        Edit
                                    </MDBBtn>
                                )}
                            </td>
                        </tr>
                    ))
                }
            </MDBTableBody>
        </MDBTable>
        <Footer />
        </div>
    );
}

export default SchemeDetail;
