import React, { useState } from 'react';
import {Button,Modal,Breadcrumb,Form,Col,InputGroup,FormControl,Table} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faPencilAlt, faPlus,faPrint,faSearch, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import './Inventory.css'
const SupplierandVendor=()=> {
    const [showAdd, setShowAdd] = useState(false);
    const handleAddClose = () => setShowAdd(false);
    const handleAddShow = () => setShowAdd(true);
        return ( <>
            <Button style={{marginBottom:"8px"}} variant="primary" onClick={handleAddShow}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><span className="ml-2">Add</span>
        </Button>
        
        <Modal className="modalAlign AlignHeading" show={showAdd}  onHide={handleAddClose}>
          <Modal.Header closeButton>
              <Breadcrumb style={{width:"100%"}}>
            <Modal.Title >Supplier Registration</Modal.Title>
            </Breadcrumb>
          </Modal.Header>
          <Modal.Body>
        <div className="container-fluid">  

          <Form size="sm">
          <Form.Row>
  <Form.Group as={Col} controlId="formBasicText">
    <Form.Label>Supplier Name</Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} controlId="formBasicText">
  <Form.Label>Contact Person</Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  
  </Form.Row>
  <Form.Row>
  <Form.Group  as={Col} controlId="formBasicText">
  <Form.Label>Address</Form.Label>
  <FormControl style={{height:"155px"}} as="textarea" aria-label="With textarea" />
  </Form.Group>
  <Form.Group  as={Col} controlId="formBasicText">
  <Form.Label>City</Form.Label>
    <Form.Control type="text" size="sm" required />
<Form.Label>Pin Code</Form.Label>
    <Form.Control type="text" size="sm" required />
  <Form.Label>State</Form.Label>
    <Form.Control type="text" size="sm" required />
  </Form.Group>

  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formBasicText">
    <Form.Label>GST</Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} controlId="formBasicText">
  <Form.Label>TIN No</Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} controlId="formBasicText">
  <Form.Label>Contact No</Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formBasicText">
    <Form.Label>PAN No</Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} controlId="formBasicText">
  <Form.Label>Bank Name</Form.Label>
    <Form.Control type="text" size="sm"  required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} controlId="formBasicText">
  <Form.Label>Account No
  </Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formBasicText">
    <Form.Label>Bank Branch</Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} controlId="formBasicText">
  <Form.Label>IFSC</Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} controlId="formBasicText">
  <Form.Label>Status</Form.Label>
    <Form.Control type="text" size="sm" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  
  </Form.Row>
  {/* <Button variant="success"  type="submit">
    Submit
  </Button> */}
 
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Modal.Footer  >
  <Button variant="success"  type="submit">
    Submit
  </Button>
  <Button variant="secondary" onClick={handleAddClose}>
              Close
    </Button>
  </Modal.Footer>
  
</Form>
</div>

          </Modal.Body>
        </Modal>
        <div style={{height:"500px",overflow:"scroll",backgroundColor:"beige"}}>

        <Table striped bordered hover variant="light" size="sm">
  <thead className="text-center">
  <tr style={{backgroundColor:"black",color:"white"}}>
      <th style={{width:"80px"}}>Sl No</th>
      <th style={{width:"300px"}}>Supplier Name</th>
      <th style={{width:"500px"}}>Address</th>
      <th>Contact No</th>
        <th style={{width:"80px"}}>Action</th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mi</td>
      <td>Kormangala,Bangalore</td>
      <td>7975128266</td>
      
      <td className="text-center"> <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
        </> );
    
}
 
export default SupplierandVendor;