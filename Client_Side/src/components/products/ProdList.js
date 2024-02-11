import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pimg from "../products/img2.jpg";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Item } from "@mui/material";
import { useState, useEffect } from "react";
import DetailProduct from "./DetailProduct";
import axios from "axios";

const ProductInfo = styled(CardContent)`
  background: #ffffff;
  margin: 12px 0px 0px;
`;

const BrandInfo = styled(Typography)`
  color: #282c3f;
  margin: 0px 0px 6px;
`;

const ProductName = styled(Typography)`
  color: #535766;
  fontsize: 14px;
  fontfamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ProductPrize = styled(Box)`
  color: #282c3f;
  fontsize: 14px;
`;

const ProductOriginalPrize = styled(Box)`
  color: #7e818c;
  margin: 0px 0px 0px 5px;
  fontsize: 12px;
  textdecoration: "line-through";
`;

const ProductDiscout = styled(Box)`
  color: #ff905a;
  margin: 0px 0px 0px 5px;
`;

export default function AllPro(props) {
  const [AllProduct, setAllProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProd, setselectedProd] = useState({
    ProdSize: [],
  });
  const openDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const lables = ["T-Shirt", "Shirt", "Jeans", "Hojeyary"];
  useEffect(() => {
    const filterData = {
      prodtype: props.proType,
      prodcategory: lables[props.valu],
    };
    axios
      .post("http://localhost:5000/prodbytypeandcat", filterData)
      .then((result) => {
        setAllProduct(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {props.valu}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {AllProduct.map((prod, idx) => {
          return (
            <Grid item md={4} sm={6} lg={3}>
              <Card
                onClick={() => {
                  setselectedProd(prod);
                  openDialog();
                }}
              >
                <CardMedia
                  component="img"
                  height="280"
                  width="210"
                  src={`http://localhost:5000${prod.ProdImage}`}
                  alt="img not found"
                />
                <ProductInfo style={{ padding: "0px 10px" }}>
                  <BrandInfo gutterBottom variant="h6" component="div">
                    {prod.ProdBrand}
                  </BrandInfo>
                  <ProductName variant="body2" color="text.secondary">
                    {prod.ProdName}
                  </ProductName>
                  <Box>
                    <ProductPrize
                      component="span"
                      style={{ fontWeight: "550" }}
                    >
                      RS {prod.ProdPrice}
                    </ProductPrize>{" "}
                    <ProductOriginalPrize
                      component="span"
                      style={{
                        textDecoration: "line-through",
                        fontSize: "14px",
                      }}
                    >
                      MRP {prod.ProdOrginalPrice}
                    </ProductOriginalPrize>{" "}
                    <ProductDiscout
                      component="span"
                      style={{ fontSize: "14px" }}
                    >
                      ({prod.ProdDiscount}% OFF)
                    </ProductDiscout>
                  </Box>
                </ProductInfo>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <DetailProduct
        open={open}
        prodSizes={selectedProd.ProdSize}
        setOpen={setOpen}
        prodData={selectedProd}
      />
    </div>
  );
}
