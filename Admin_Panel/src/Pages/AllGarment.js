import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container,Row,Col,Card,Modal,Form,Button,} from "react-bootstrap";

const AllGarment = () => {
  const [AllProduct, setAllProduct] = useState([]);
  const [showModel, setshowModel] = useState(false);
  const [selIdx, setselIdx] = useState(-1);
  const [reload, setReload] = useState(false);

  const [pId, setpId] = useState("");
  const [PName, setPName] = useState("");
  const [PPrice, setPPrice] = useState("");
  const [PType, setPType] = useState("");
  const [PCat, setPCat] = useState("");
  const [PSize, setPSize] = useState("");
  const [pbrad, setpbrad] = useState("");
  const [pop, setpop] = useState("");
  const [pd, setpd] = useState("");

  function onShow() {
    setshowModel(true);
  }
  function onHide() {
    setshowModel(false);
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/allprod")
      .then((result) => {
        setAllProduct(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  function deleteProd(ProdId) {
    const prod = {
      id : ProdId
    }
    axios
      .post("http://localhost:5000/deleprod",prod)
      .then((result) => {
        alert("Product Deleted");
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function UpdateProd() {
    const Produpdate = {
      id: pId,
      prodname: PName,
      prodcategory: PCat,
      prodtype: PType,
      prodsize: PSize,
      prodprice: PPrice,
      pbrand: pbrad,
      porgprice: pop,
      pdis: pd,
    };
    axios
      .post("http://localhost:5000/updatePro", Produpdate)
      .then((upProd) => {
        onHide();
        alert("Product Price update Successfully");
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div>
        <Container className="mt-3">
          <Row>
            {AllProduct.map((prod, idx) => {
              return (
                <Col sm={12} md={6} lg={3}>
                  <Card>
                    <Card.Header>
                      <Card.Img
                        src={`http://localhost:5000${prod.ProdImage}`}
                      />
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>Brand: {prod.ProdBrand}</Card.Title>
                      <Card.Title>Name: {prod.ProdName}</Card.Title>
                      <Card.Title>Size:{prod.ProdSize.join(",")}</Card.Title>
                      <Card.Title>
                        Original Price: {prod.ProdOrginalPrice}
                      </Card.Title>
                      <Card.Title>Price: {prod.ProdPrice}</Card.Title>
                      <Card.Title>Discount: {prod.ProdDiscount}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <Button className="me-5" variant='warning'
                        onClick={() => {
                          onShow();
                          setselIdx(idx);
                          setpId(AllProduct[idx]._id);
                          setPName(AllProduct[idx].ProdName);
                          setPType(AllProduct[idx].ProdType);
                          setPCat(AllProduct[idx].ProdCategory);
                          setPSize(AllProduct[idx].ProdSize);
                          setPPrice(AllProduct[idx].ProdPrice);
                          setpbrad(AllProduct[idx].ProdBrand);
                          setpop(AllProduct[idx].ProdOrginalPrice);
                          setpd(AllProduct[idx].ProdDiscount);
                        }}
                      >
                        Update
                      </Button>
                      <Button className="ms-5" variant='danger' onClick={() => deleteProd(prod._id)}>
                        Delete
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <Modal show={showModel} onHide={onHide}>
          <Modal.Header closeButton>All Garments</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" value={PName}></Form.Control>
              <Form.Label>Product Type</Form.Label>
              <Form.Control type="text" value={PType}></Form.Control>
              <Form.Label>Product Category</Form.Label>
              <Form.Control type="text" value={PCat}></Form.Control>
              <Form.Label>Product Size</Form.Label>
              <Form.Control type="text" value={PSize}></Form.Control>
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="number"
                value={PPrice}
                onChange={(f) => setPPrice(f.target.value)}
              ></Form.Control>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => UpdateProd()}>Update</Button>
            <Button onClick={() => onHide()}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AllGarment;
