import Dialog from "@mui/material/Dialog";
import { Box, Button, Divider, Typography } from "@mui/material";
import Detimg from "./img2.jpg";
import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import { addItem } from "../../reduxwork/CartSlice";
import { useState } from "react";

const Proimgset = styled(Box)`
  height: 82%;
  width: 100%;
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

const DetailProduct = ({ open, setOpen, prodData, prodSizes }) => {
  const dispatcher = useDispatch();
  const [selSize, setSelSize] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSizeChange = (event) => {
    setSelSize(event.target.value);
    setErrorMessage('');
  };

  const handleClose = () => {
    setOpen(false);
    setErrorMessage('');
  };

  const handleAddToCart = () => {
    if (selSize) {
      // Perform the action to add the item to the cart
      dispatcher(addItem({ selSize, prodData }));
      // setSelSize("");
    } else {
      // Show an error message or take other appropriate action
      setErrorMessage("please select a size");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Box style={{ display: "flex" }}>
        <Box style={{ margin: "auto" }}>
          <Proimgset>
            <Box>
              <img
                style={{
                  height: "280px",
                  width: "237px",
                  padding: "100px 20px 100px 10px",
                }}
                src={`http://localhost:5000${prodData.ProdImage}`}
                alt="imm"
              />
            </Box>
          </Proimgset>
        </Box>
        <Box>
          <Typography
            variant="h5"
            style={{
              color: "#282C3F",
              fontSize: "24px",
              padding: "10px 330px 0px 0px",
            }}
          > 
            {prodData.ProdBrand}
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: "#535665",
              fontSize: "20px",
              padding: "10px 20px 14px 0px",
            }}
          >
            {prodData.ProdName}
          </Typography>
          <Divider />
          <Box style={{ padding: "20px 100px 10px 0px" }}>
            <ProductPrize component="span" style={{ fontWeight: "550" }}>
              Rs {prodData.ProdPrice}
            </ProductPrize>
            <ProductOriginalPrize
              component="span"
              style={{
                textDecoration: "line-through",
                fontSize: "14px",
              }}
            >
              MRP {prodData.ProdOrginalPrice}
            </ProductOriginalPrize>{" "}
            <ProductDiscout component="span" style={{ fontSize: "14px" }}>
              ({prodData.ProdDiscount}% OFF)
            </ProductDiscout>
          </Box>
          <Box
            component="span"
            style={{
              color: "#03A685",
              fontSize: "20px",
              margin: "10px 20px 5px 0px",
            }}
          >
            inclusive of all taxes
          </Box>
          <Box style={{ margin: "15px 0px 10px 0px" }}>
            <Box style={{ color: "#000000", fontWeight: "600" }}>
              SELECT SIZE
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Box component="span" style={{ color: "#FF3E6C" }}>
                SIZE CHART
                <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
              </Box>
            </Box>
            {errorMessage && (
              <Typography style={{marginTop: "10px"}} variant="h6" color="error">
                {errorMessage}
              </Typography>
            )}
            <Box style={{ margin: "20px 0 25px 0px" }}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  {prodSizes.map((siz) => {
                    return (
                      <FormControlLabel
                        value={siz}
                        onChange={handleSizeChange}
                        control={<Radio />}
                        label={siz}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
              <Button
                onClick={handleAddToCart}
                style={{
                  color: "#FFFFFF",
                  background: "#FF3E6C",
                  padding: "10px 40px 10px 40px",
                }}
              >
                <ShoppingCartIcon />
                ADD TO CART
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant="outlined"
                style={{
                  color: "#000000",
                  background: "#FFFFFF",
                  padding: "10px 40px 10px 40px",
                  borderColor: "#000000",
                }}
              >
                <FavoriteBorderIcon />
                WISHLIST
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
export default DetailProduct;
