import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import OrderModels from "./OrderModels";

const AllOrders = () => {
  const [AllOrders, setAllOrders] = useState([]);
  const [ordpro, setordpro] = useState([])
  const [ordcust, setordcust] = useState([]);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {
    axios.get("http://localhost:5000/allorder")
      .then((result) => {
        setAllOrders(result.data)
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container className="mt-4">
        <div>Order Details</div>
        <Row>{
          AllOrders.map((ord, idx) => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Card>
                  <Card.Body>
                    <Card.Title>No. of Item: {ord.NoOfItem}</Card.Title>
                    <Card.Title>Order Date: {ord.OrderDate}</Card.Title>
                    <Card.Title>Order Total: {ord.OrderTotal}</Card.Title>
                    <Card.Title>Order status: {ord.OrderStatus}</Card.Title>
                    <Card.Title>Order Total: {ord.OrderTotal}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <Button onClick={() => {
                      handleShow()
                      setordpro(ord.OrderItems)
                      setordcust(ord.CustoId)
                    }
                    } variant="outline-secondary">Details</Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
          })
        }
        </Row>
      </Container>

      <OrderModels show={show} item={ordpro} item2={ordcust} hide={handleClose} />
    </div>
  )
};

export default AllOrders;
