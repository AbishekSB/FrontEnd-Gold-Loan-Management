import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import './content.css'
import AdminHome from './AdminHome';
function Content() {
  return (
   <div> 
    <AdminHome />
      <div className="welcome-text">Welcome ADMIN</div>

      <div className="dashboard-summary">
        <Card>
          <Card.Body>
            <Card.Title>Loan Applications</Card.Title>
            <Card.Text>
              20 new applications
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Clients</Card.Title>
            <Card.Text>
              150 active clients
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Reports</Card.Title>
            <Card.Text>
              5 new reports
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
 
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Activity</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>New loan application received</td>
              <td>2024-06-01</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Client KYC updated</td>
              <td>2024-06-01</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Loan disbursed</td>
              <td>2024-06-01</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Monthly report generated</td>
              <td>2024-06-01</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </Table>
      </div>
 </div>
   
  );
}

export default Content;
