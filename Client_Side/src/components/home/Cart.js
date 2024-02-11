import React, { useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ImgCart from "./kidstshit.jpg";
import {
  calculateTotal,
  decreQty,
  increQty,
  removeItem,
  clearCart,
} from "../../reduxwork/CartSlice";
import { Margin } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
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

function loadScript(src){
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Cart = (prodData) => {
  const [quantity, setQuantity] = useState(1);
  const [errorMessageOfPlaceOrder,setErrorMessageOfPlaceOrder] = useState("");
  const { CartItems, CartTotalAmt } = useSelector((state) => state.per.cartdata);
  const dispatcher = useDispatch();

  dispatcher(calculateTotal());

  async function showRazorpay(){
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if(!res){
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    
    const amtData = { amount : CartTotalAmt}
    const result = await axios.post("http://localhost:5000/razorpay", amtData)
     
    console.log(result.data);

    const options = {
      key: "rzp_test_9th3ukiKK1ibNm",
      currency : result.data.currency,
      amount : result.data.amount.toString(),
      order_id : result.data.id,
      name : "Yogita Dresses",
      description : "Thank you",
       // image: "http://localhost:1337/logo.svg",
       handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        alert("Transaction successful");

    },
    prefill : {
      name : "Rajat",
      email : "rajat@rajat.com",
      phone_number : "9899999999",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

  function addOrder() {
    const finalItems = [];

    CartItems.map((itm) => {
      finalItems.push({ prod: itm._id, qty: itm.qty, size: itm.selSize });
    });

    const orderData = {
      ordtotal: CartTotalAmt,
      ordnoitems: CartItems.length,
      ordstatus: "Pending",
      cid: "645b2178615593b8fdda40de",
      orditems: finalItems,
    };
    axios
      .post("http://localhost:5000/addorder", orderData)
      .then((result) => {
        showRazorpay()
        console.log(result.data)
        //alert("Order Placed");
        dispatcher(clearCart());
      })
      .catch((err) => {
        alert("Order Fail");
        console.log(err);
      });
  };

  const handlePlaceOrder = () => {
    if(CartItems.length == 0){
      setErrorMessageOfPlaceOrder("please Add product in the cart")
    }else {
      addOrder();
    }

  }

  return (
    <div style={{ margin: "70px 20px 20px 40px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {CartItems.map((item) => {
          const iid = item._id;
          return (
            <Box>
              <Grid item style={{ width: 400, margin: "10px 40px 10px 40px" }}>
                <Card>
                  <Box style={{ margin: "0 0 0 345px" }}>
                    <Button onClick={() => dispatcher(removeItem({ iid }))}>
                      <CancelIcon />
                    </Button>
                  </Box>

                  <CardMedia
                    component="img"
                    className="crtimg"
                    sx={{ height: 400 }}
                    src={"http://localhost:5000".concat(item.ProdImage)}
                    alt="proimg not found"
                  />
                  <ProductInfo style={{ padding: "0px 10px" }}>
                    <BrandInfo gutterBottom variant="h6" component="div">
                      {item.ProdBrand}
                    </BrandInfo>
                    <ProductName variant="body2" color="text.secondary">
                      {item.ProdName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.selSize}
                    </ProductName>
                    <Box>
                      <ProductPrize
                        component="span"
                        style={{ fontWeight: "550" }}
                      >
                        Rs.{item.ProdPrice}
                      </ProductPrize>{" "}
                      <ProductOriginalPrize
                        component="span"
                        style={{
                          textDecoration: "line-through",
                          fontSize: "14px",
                        }}
                      >
                        MRP {item.ProdOrginalPrice}
                      </ProductOriginalPrize>{" "}
                      <ProductDiscout
                        component="span"
                        style={{ fontSize: "14px" }}
                      >
                        ({item.ProdDiscount}% OFF)
                      </ProductDiscout>
                      <Button onClick={() => dispatcher(decreQty({ iid }))}>
                        -
                      </Button>
                      {item.qty}
                      <Button onClick={() => dispatcher(increQty({ iid }))}>
                        +
                      </Button>
                    </Box>
                  </ProductInfo>
                </Card>
              </Grid>
            </Box>
          );
        })}
      </Grid>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Typography style={{ margin: "10px 20px 10px 10px" }} variant="h6">
          Total : {CartTotalAmt}
        </Typography>
        <Button
          style={{ margin: "10px 20px 10px 10px" }}
          variant="contained"
          color="success"
          onClick={handlePlaceOrder}
        >
          place order
        </Button>
        <Button
        style={{ margin: "10px 20px 10px 10px" }}
        variant="contained"
        color="error"
        onClick={() => dispatcher(clearCart())}
        >
          Clear cart
        </Button>
      </Box>
      {errorMessageOfPlaceOrder && (
              <Typography style={{marginTop: "10px",textAlign: "center"}} variant="h6" color="error">
                {errorMessageOfPlaceOrder}
              </Typography>
      )}
    </div>
  );
};

export default Cart;
