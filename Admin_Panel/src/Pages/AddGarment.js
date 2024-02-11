import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const AddGarment = () => {

  const [pname, setpname] = useState("");
  const [pcat, setpcat] = useState("");
  const [pprice, setpprice] = useState("");
  const [ptype, setptype] = useState("");
  const [psize, setpsize] = useState([]);
  const [pimg, setpimg] = useState("");
  const [pbrad, setpbrad] = useState("")
  const [pop, setpop] = useState("")
  const [pd, setpd] = useState("")
  const [pisavai, setpisavai] = useState(false);


  function handleSelect(event) {
    const { checked, value } = event.currentTarget
    setpsize((prev) => checked ? [...prev, value]
      : prev.filter(val => val !== value))
  } 

  function addProduct(e) {
    const product = {
      prodname: pname,
      prodcategory: pcat,
      prodprice: pprice,
      prodtype: ptype,
      prodsize: psize,
      prodimage: pimg,
      prodisavl: pisavai,
      pbrand: pbrad,
      porgprice : pop,
      pdis: pd
    }
    axios.post('http://localhost:5000/addprod', product)
      .then((result) => {
        console.log(result.data);
        alert("Product Added Successfully")
      }).catch((err) => {
        console.log(err);
      });
      e.preventDefault();
  }

  function uploadfun(e) {
    const data = new FormData();
    data.append("image", e.target.files[0])
    axios.post("http://localhost:5000/uploadimage", data)
      .then((result) => {
        console.log(result.data);
        setpimg(result.data.filepath)
        alert("Image Uploaded Successfully")
      }).catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <Container>
        <Form onSubmit={(e) => addProduct(e)} >

        <Form.Group>
            <Form.Label>Product Brand</Form.Label>
            <Form.Control type="text" onChange={(f) => setpbrad(f.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" onChange={(f) => setpname(f.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Type</Form.Label>
            <Form.Select onChange={(e) =>{ setpsize([])
              setptype(e.target.value)}}>
              <option>Select</option>
              <option value="Born Baby Wear">Born Baby Wear</option>
              <option value="Kids Wear">Kids Wear</option>
              <option value="Mens Wear">Mens Wear</option>
              <option value="Women Wear">Women Wear</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Category</Form.Label>
            <Form.Select onChange={(e) => { setpsize([])
              setpcat(e.target.value)}} >
              <option>Select</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Shirt">Shirt</option>
              <option value="Jeans">Jeans</option>
              <option value="Cotton Panta">Cotton Panta</option>
              <option value="Hojeyary">Hojeyary</option>
              <option value="Kurti">Kurti</option>
            </Form.Select>
          </Form.Group>

          <div className="mt-3 mb-2">
            <Form.Label>Product Size</Form.Label>
            {
              (function () {

                if (ptype === "Born Baby Wear") {
                  return (
                    <Form.Group className="d-flex flex-row">
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="2 month" type="checkbox" label="2 month" name='BBSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="4 month" type="checkbox" label="4 month" name='BBSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="6 month" type="checkbox" label="6 month" name='BBSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="8 month" type="checkbox" label="8 month" name='BBSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="10 month" type="checkbox" label="10 month" name='BBSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="1 year" type="checkbox" label="1 year" name='BBSize' />
                    </Form.Group>
                  );
                }

                if (ptype === "Kids Wear") {
                  return (
                    <Form.Group className="d-flex flex-row">
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="26 cm" type="checkbox" label="26 cm" name='kidsSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="28 cm" type="checkbox" label="28 cm" name='kidsSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="30 cm" type="checkbox" label="30 cm" name='kidsSize' />
                    </Form.Group>
                  );
                }

                if (pcat === "Jeans" || pcat === "Cotton Panta") {
                  return (
                    <Form.Group className="d-flex flex-row">
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="26 inches" type="checkbox" label="26 inches" name='MenPSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="28 inches" type="checkbox" label="28 inches" name='MenPSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="30 inches" type="checkbox" label="30 inches" name='MenPSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="32 inches" type="checkbox" label="32 inches" name='MenPSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="34 inches" type="checkbox" label="34 inches" name='MenPSize' />
                    </Form.Group>
                  );
                }

                if (pcat === "Shirt" || pcat === "T-Shirt") {
                  return (
                    <Form.Group className="d-flex flex-row">
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="M"  type="checkbox" label="M" name='TSSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="L"  type="checkbox" label="L" name='TSSize' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="XL" type="checkbox" label="XL" name='TSSize' />
                    </Form.Group>
                  );
                }

                if (pcat === "Hojeyary" || pcat === "Kurti") {
                  return (
                    <Form.Group className="d-flex flex-row">
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="Reguler" type="checkbox" label="Reguler" name='HoKu' />
                      <Form.Check className="ms-4" onChange={(e) => handleSelect(e)} value="Large" type="checkbox" label="Large" name='HoKu' />
                    </Form.Group>
                  );
                }
                return <h5>Select Type & Category</h5>

              })()
            }
          </div>
          <Form.Group>
            <Form.Label>Product Original Price</Form.Label>
            <Form.Control type="number" onChange={(f) => setpop(f.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" onChange={(f) => setpprice(f.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Discount</Form.Label>
            <Form.Control type="text" onChange={(f) => setpd(f.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" onChange={uploadfun} />
          </Form.Group>

          <Form.Group controlId="ProdIsAva" className="mb-3 mt-3">
            <Form.Check className="ms-4" type="checkbox" size="lg" lable="Available" onChange={(f) => setpisavai(true)} />
          </Form.Group>

          <Button type='submit' variant='outline-secondary' className='m-3'>Save</Button>
        </Form>
      </Container>
    </div>
  )
};

export default AddGarment;
