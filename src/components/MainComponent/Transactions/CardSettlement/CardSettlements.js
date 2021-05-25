
import React, { useState} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faPlus,faSearch, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import {Button,Modal,Breadcrumb,Form,Col,InputGroup,FormControl,Table} from 'react-bootstrap'
import '../../Master/Inventory.css'
const CardSettlement = () => {
   
   

    const [showAdd, setShowAdd] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const handleAddClose = () => setShowAdd(false);
    const handleAddShow = () => setShowAdd(true);

    const handleSearchClose = () => setShowSearch(false);
    const handleSearchShow = () => setShowSearch(true);
  
    return (
      <>
        <Button style={{marginBottom:"8px"}} variant="primary" onClick={handleAddShow}>
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><span className="ml-2">Add</span>
        </Button>
  
        <Modal className="modalAlign AlignHeading"show={showAdd}  onHide={handleAddClose}>
          <Modal.Header closeButton>
              <Breadcrumb style={{width:"100%"}}>
            <Modal.Title >Inventory</Modal.Title>
            </Breadcrumb>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group controlId="formBasicText">
    <Form.Label>Category Name</Form.Label>
    <Form.Control type="text" placeholder="Category Name" required/>
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group controlId="formBasicText" >
    <Form.Label>Item Name</Form.Label>
    <Form.Control type="text" placeholder="Item Name" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="formBasiText" >
    <Form.Label>HSN</Form.Label>
    <Form.Control type="text" placeholder="HSN" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  {/* <Form.Group controlId="formBasicText" aria-required>
    <Form.Label>Cost Price</Form.Label>
    <Form.Control type="text" placeholder="Cost Price" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group> */}
  <Form.Row>
  <Form.Group as={Col} controlId="formBasicText">
    <Form.Label>Cost Price</Form.Label>
    <Form.Control type="text" placeholder="Cost Price" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  <Form.Group as={Col} controlId="formBasicText">
  <Form.Label>Retail Price</Form.Label>
    <Form.Control type="text" placeholder="Retail Price" required />
    <Form.Control.Feedback type="invalid">
    please fill this field.
  </Form.Control.Feedback>
  </Form.Group>
  
  </Form.Row>
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Modal.Footer>
  <Button variant="success"  type="submit">
    Submit
  </Button>
  <Button variant="secondary" onClick={handleAddClose}>
              Close
    </Button>
  </Modal.Footer>
</Form>
          </Modal.Body>
        </Modal>
       {/* <i><FontAwesomeIcon className="float-right ml-2 mt-3"  icon={faSearchPlus} /></i> 
        <span className="float-right">
        
            <Form.Group style={{width:"100px",height:"20px"}} controlId="formSearch">
    
    <Form.Control type="text" placeholder="Search"  /> */}
    
  {/* </Form.Group></span> */}

  <InputGroup className="mb-2 float-right mr-5"style={{width:"200px"}} onClick={handleSearchShow}>
        <InputGroup.Prepend>
          <InputGroup.Text><FontAwesomeIcon className="float-right"  icon={faSearchPlus} /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroup" placeholder="Search" />
      </InputGroup>
      
      <Modal className=" modal2 "show={showSearch}  onHide={handleSearchClose}>
        <Modal.Header closeButton>
          <Modal.Title >Search Option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="formBasicText">
  <Form.Text className="text-muted">
     Bank Name
    </Form.Text>
    <Form.Control size="sm" as="select">
    <option>Canara Bank</option>
    <option>Federal Bank</option>
    <option>HDFC Bank</option>
    <option>SBI Bank</option>

  </Form.Control>
    
  </Form.Group>

  
  
  <Button className=""variant="primary" type="submit">
    Go
  </Button>
</Form>

        </Modal.Body>
      </Modal>
      <div style={{height:"500px",overflow:"scroll",backgroundColor:"beige"}}>

      <Table striped bordered hover variant="light" size ="sm">
  <thead>
  <tr style={{backgroundColor:"black",color:"white"}}>
      <th style={{width:"100px"}}>Date</th>
      <th>Card / Bank</th>
      <th>Invoice No</th>
      <th>Amount</th>
      <th>Entered By</th>
      <th style={{width:"80px"}}>Time</th>
      <th style={{width:"80px"}}>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>08/04/2021</td>
      <td>Canara Bank-xxxxx7485</td>
      <td>SI 96-03/21-22</td>
      <td>7990</td>
      <td>Bufferzero</td>
      <td>7:10 PM</td>
      <td style={{backgroundColor:"green"}}> credited</td>
    </tr>
    <tr>
      <td>08/04/2021</td>
      <td>Canara Bank-xxxxx7485</td>
      <td>SI 96-03/21-22</td>
      <td>7990</td>
      <td>Bufferzero</td>
      <td>7:10 PM</td>
      <td style={{backgroundColor:"green"}}> credited</td>
    </tr>
    
  </tbody>
</Table>
  </div>    

</>
    );
  }
  
  

 
export default CardSettlement;