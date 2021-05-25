import React, { useState } from "react";
import {
  Button,
  Modal,
  Breadcrumb,
  Form,
  Col,
  Table,
  Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPlus,
  faSearch,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./Inventory.css";
const BussinessBanking = () => {
  const [showAdd, setShowAdd] = useState(false);

  const handleAddClose = () => setShowAdd(false);
  const handleAddShow = () => setShowAdd(true);

  return (
    <>
      <Button
        style={{ marginBottom: "8px" }}
        variant="primary"
        onClick={handleAddShow}
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        <span className="ml-2">Add</span>
      </Button>
      <Modal
        className="modalAlign AlignHeading"
        show={showAdd}
        onHide={handleAddClose}
      >
        <Modal.Header closeButton>
          <Breadcrumb style={{ width: "100%" }}>
            <Modal.Title>Bank Registration</Modal.Title>
          </Breadcrumb>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicText">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control type="text" placeholder="Cost Price" required />
                <Form.Control.Feedback type="invalid">
                  please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicText">
                <Form.Label>Account No</Form.Label>
                <Form.Control type="text" placeholder="Retail Price" required />
                <Form.Control.Feedback type="invalid">
                  please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formBasicText">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicText">
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder="Cost Price" required />
                <Form.Control.Feedback type="invalid">
                  please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicText">
                <Form.Label>Include for card swipe</Form.Label>
                <Form.Control type="text" placeholder="Retail Price" required />
                <Form.Control.Feedback type="invalid">
                  please fill this field.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Modal.Footer>
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="secondary" onClick={handleAddClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <div
        style={{
          height: "500px",
          overflow: "scroll",
          backgroundColor: "beige",
        }}
      >
        <Table striped bordered hover variant="light" size="sm">
          <thead>
            <tr style={{ backgroundColor: "black", color: "white" }}>
              <th style={{ width: "80px" }}>Sl No</th>
              <th>Bank Name</th>
              <th>Account No</th>
              <th>Address</th>
              <th style={{ width: "80px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Canara Bank</td>
              <td>xxxxxxxxxxxx7845</td>
              <td>GandhiBazar Main Road</td>

              <td>
                {" "}
                <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
              </td>
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
    </>
  );
};

export default BussinessBanking;
