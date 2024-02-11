//order datails model 
import axios from 'axios'
import React from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'

function OrderDetailModel(props) {

    function updatestatus() {
        const ordstatus = { 
            id: props.ordobj[props.ordindex]._id,
            orderstatus: "approved"
        }
        axios.post("http://localhost:5000/updateorder", ordstatus)
            .then((result) => {
                console.log(result.data)
                alert("status updated")

            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Modal show={props.show} onHide={props.onhidden} closeButton>
                <Modal.Header closeButton>Details</Modal.Header>
                <Modal.Body>
                    <div>
                        <h3>Orders:</h3>
                        <Container>
                            <Card>
                                {
                                    props.ordFooditems.map((order, idx) => {
                                        return (
                                            <Card.Body>
                                                <h5>{idx + 1}: Order</h5>
                                                <Row>
                                                    <Col>
                                                        <img className='mimg' src={`http://localhost:5000${order.Food.FoodImage}`} />
                                                    </Col>
                                                    <Col>
                                                        <ul>
                                                            <li><b>Food Name:</b>{order.Food.FoodName}</li>
                                                            <li><b>FoodType:</b>{order.Food.FoodType}</li>
                                                            <li><b>Food Category:</b>{order.Food.FoodCategory}</li>
                                                            <li><b>Food Price:</b>{order.Food.FoodPrice}</li>
                                                            <li><b>Food is Available:</b>{order.Food.FoodisAvailable}</li>
                                                        </ul>
q
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        )
                                    })
                                }
                            </Card>
                        </Container>

                    </div>

                    <h3>Customer Details</h3>
                    <Container>
                        <Card>
                            <ul>
                                <li><b>Cust Name:</b>{props.ordcustid.CustName}</li>
                                <li><b>Cust Address:</b>{props.ordcustid.CustAddress}</li>
                                <li><b>Cust Mob No:</b>{props.ordcustid.CustMobNo}</li>
                                <li><b>Cust Email:</b>{props.ordcustid.CustEmail}</li>
                            </ul>
                        </Card>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        updatestatus()
                        props.onhidden()
                    }}>Approve
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default OrderDetailModel





///////////////////////////////////////////////////////////////////////////////

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import OrderDetailModel from '../Components/OrderDetailModel';
 
function OrderList() {
  const [orderlist, setorderlist] = useState([
    {
      CustId: {
        CustName: ""
      }
    }
  ])
  const [showModel, setshowModel] = useState(false)
  const [selIdx, setselIdx] = useState(-1)
  
  const [ordData, setordData] = useState([])
  const [ordFoodItems, setordFoodItems] = useState([])
 
  const [Id, setId] = useState("")
  const [OrderItemsNo, setOrderItemsNo] = useState("")
  const [OrderStatus, setOrderStatus] = useState("")
  const [CustId, setCustId] = useState("")
  const [OrderItems, setOrderItems] = useState("")
  const [OrderQuantity, setOrderQuantity] = useState("")
 
  function onShowModal() {      
    setshowModel(true)
  }
 
  function onHideModal() {
    setshowModel(false)
  }
 
  useEffect(() => {
    axios.get("http://localhost:5000/allOrder")
      .then((result) => {
        setorderlist(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])
 
  
 
  
  return (
    <div><h1>OrderList</h1>
      <Container>
        <Row>
          {
            orderlist.map((order, idx) => {
              return (
                <Col lg={4} md={3} sm={12}>
                  <Card>
                    <Card.Body>
                      <h3>{order.OrderDate}</h3>
                      <h3>{order.OrderAmount}</h3>
                      <h3>{order.OrderItemsNo}</h3>
                      <h3>{order.OrderStatus}</h3>
                      {/* <h3>{order.CustId}</h3> */}
                      {/* <h3>{order.OrderItems}</h3> */}
                    </Card.Body>
                    <Card.Footer>
                      <Button variant='success' onClick={() => {
                        onShowModal()
                        setselIdx(idx)
                        setordData(order.CustId)
                        setordFoodItems(order.OrderItems)
                      }}> Details</Button>
                     
                    </Card.Footer>
 
                  </Card>
                </Col>
              )
            })
          }
        </Row>
       
      </Container>
      
      <OrderDetailModel ordcustid={ordData} ordFooditems={ordFoodItems} ordobj={orderlist} ordindex={selIdx} show={showModel} onhidden={onHideModal}/>
    </div>
  )
}
 
 
 
export default OrderList