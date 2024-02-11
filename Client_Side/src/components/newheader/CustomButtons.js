import { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import LoginDiaglog from "../login/LoginDialog";
import { ShoppingCart } from "@mui/icons-material";
import Cart from "../home/Cart";
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";


const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: 40,
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #808080;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CustomButtons = () => {

  const { ItemCount }=useSelector((state)=> state.per.cartdata)

  const [open, setOpen] = useState(false);

  const navi = useNavigate();
  
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={() => openDialog()}>
        Login
      </LoginButton>

      
      <Typography style={{ marginTop: 3, width: 135 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More</Typography>
      
      <Container onClick={() => {navi('/cart')}}>
       
        <StyledBadge badgeContent={ItemCount} color="secondary">
        <ShoppingCart />
        </StyledBadge>
      </Container>
      
      <LoginDiaglog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
