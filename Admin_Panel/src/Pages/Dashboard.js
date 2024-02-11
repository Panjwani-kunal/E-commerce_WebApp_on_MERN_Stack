import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import AllGarment from "./AllGarment";


const Dashboard = () => {
  const [reload, setReload] = useState(false)
  const [AllGarments, setAllGarments] = useState([]);
  const [AllCustomer, setAllCustomer] = useState([]);
  const [AllOrders, setAllOrders] = useState([]);  
  
  

  useEffect(() => {
   axios.get("http://localhost:5000/allprod")
   .then((result) => {
    setAllGarments(result.data)
   }).catch((err) => {
    console.log(err);
   });
  }, [reload]);

  
  
  useEffect(() => {
     axios.get("http://localhost:5000/allcustomer")
    .then((result) => {
     setAllCustomer(result.data)
    }).catch((err) => {
     console.log(err);
    });
   }, [reload]);

   useEffect(() => {
   axios.get("http://localhost:5000/allorder")
    .then((result) => {
     setAllOrders(result.data)
    }).catch((err) => {
     console.log(err);
    });
 
   },[reload]);

  //  const price =()=>{
  //   AllOrders.map((item)=>{
  //     setAllAmount((prev)=>prev
  //     +item.OrderTotal)
  //     console.log(AllAmount);
  //         })
  //  }
//   function price(){
//     AllOrders.map((item)=>{
//       setAllAmount((prev)=>prev+item.OrderTotal)
//       console.log(AllAmount)
//     })
// }
  return <div >

    <Container className='DashBoard_Container'>
      <h5>Overview</h5>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <div className='Dashboard_Card'>
            <div>
              <h4>Total Garments</h4>
              <h2>{AllGarments.length}</h2>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className='Dashboard_Card'>
            <h4>Total Customer</h4>
            <h2>{AllCustomer.length}</h2>
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <div className='Dashboard_Card'>
            <h4>Total Order</h4>
            <h2>{AllOrders.length}</h2>
          </div>
        </Col>
       
      </Row>
    </Container >

  </div>;
};
export default Dashboard;
