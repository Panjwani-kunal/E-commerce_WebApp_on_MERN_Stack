import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";


const AllCustomer = () => {
  const [AllCustomer, setAllCustomer] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/allcustomer").
      then((result) => {
        setAllCustomer(result.data)
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>
    <Container className="mt-5">
      <Table triped bordered hover>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Cust. Name</th>
            <th>Mobile</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
            AllCustomer.map((cu, idx) =>{
              return(
                <tr>
                  <td>{idx +1}</td>
                  <td>{cu.CustName}</td>
                  <td>{cu.CustMobNo}</td>
                  <td>{cu.CustAddress}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

    </Container>
  </div>;
};

export default AllCustomer;
