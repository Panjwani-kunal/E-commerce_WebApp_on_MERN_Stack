import React from "react";
import { Modal, Button, Row, Col } from 'react-bootstrap'

const OrderModels = ({ show, hide, item, item2 }) => {

  return (
    <div>

      <Modal show={show} onHide={hide} size="xl" >
        <Modal.Header closeButton>
          <Modal.Title>
            Product and Customer Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              {item.map((set, idx) => {
                return (
                  <div>
                    <h3>{idx + 1}. Order Product</h3>
                    <Row>
                      <Col>
                        <img className="modelimg"
                          src={`http://localhost:5000${set.prod.ProdImage}`} alt={set.ProdName} />
                      </Col>
                      <Col>
                        <li><b>Product Name:</b>{set.prod.ProdName}</li>
                        <li><b>Product Type:</b>{set.prod.ProdType}</li>
                        <li><b>Product Category:</b>{set.prod.ProdCategory}</li>
                        <li><b>Product Size:</b>{set.prod.ProdSize}</li>
                        <li><b>Product Price:</b>{set.prod.ProdPrice}</li>
                        <li><b>Available or Not:</b>{set.prod.ProdIsAva}</li>
                      </Col>
                    </Row>
                  </div>
                )
              })
              }
            </Col>


            <Col>
              <div><strong>Customer Details :-</strong></div><br />
                      <div>
                        <h6><b>Customer Name: </b>{item2.CustName}</h6>
                        <h6><b>Customer Mobile: </b>{item2.CustMobNo}</h6>
                        <h6><b>Customer Address: </b>{item2.CustAddress}</h6>
                      </div>
                  
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hide}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default OrderModels;
