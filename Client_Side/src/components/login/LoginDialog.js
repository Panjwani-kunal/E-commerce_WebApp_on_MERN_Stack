import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Prologo from "./ydlogo.png";
import AppRoute from "../AppRoute";
import {login,register} from '../../reduxwork/AuthSlice';
import { useDispatch } from "react-redux";
import axios from "axios";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background : #808080 url('${Prologo}') center 85% no-repeat ;
  height: 82%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 550;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #808080;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders,Wishlist and Reccomendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  username: '',
  Email: '',
  mobileno: '',
  password: '',
};

const LoginDiaglog = ({ open, setOpen }) => {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [mobno, setMobNo] = useState("");
  const [password, setPassword] = useState("");

  const [account, toggleAccount] = useState(accountInitialValues.login);

  // const [signup, setSignup] = useState(signupInitialValues);

  const dispatcher = useDispatch();

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  // const onInputChange = (e) => {
  //   setSignup({ ...signup, [e.target.name]: e.target.value });
  //   console.log(signup);
  // };

  

  function doLogin() {
    const user = {
      email : Email,
      pass : password,
    }

    axios.post("http://localhost:5000/login", user)
      .then((result) =>{
        console.log(result.data)
        let userData = result.data.user
        dispatcher(login(userData));
        alert("Login success")
        setOpen(false);
      }).catch((err) => {
        console.log(err)
      })
    
  }

  function doRegister() {
    const user = {
      name : Name,
      email : Email,
      userMobNo : mobno,
      pass : password,
    }

    axios.post("http://localhost:5000/register", user)
      .then((result) => {
        console.log(result.data)
        alert("Registration Successful done")
      }).catch((err) => {
        console.log(err)
      })
    
    dispatcher(register(user));
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField onChange={(e) => setEmail(e.target.value)} variant="standard" label="Enter Email" type="email" />
              <TextField onChange={(e) => setPassword(e.target.value)} variant="standard" label="Enter Password" type="password" />
              <Text>
                By continuing, you agree to Yogita Dresses Terms of Use and
                Privacy Policy.
              </Text>
              <Link to="/">
              <LoginButton onClick={doLogin}>Login</LoginButton>
              </Link>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Yogita Dresses? Create an Account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => setName(e.target.value)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
                name="Email"
                label="Enter Email"
                type="email"
              />
              <TextField
                variant="standard"
                onChange={(e) => setMobNo(e.target.value)}
                name="Mobileno"
                label="Enter Mobile NO."
                type="tel"
              />
              <TextField
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Enter Password"
                type="password"
              />
              <Link to="/">
              <LoginButton onClick={doRegister}>Continue</LoginButton>
              </Link>
            </Wrapper>
          )}
          {/* <Wrapper>
            <TextField variant="standard" label="Enter Email/Mobile number" />
            <TextField variant="standard" label="Enter Password" />
            <Text>
              By continuing, you agree to Yogita Dresses Terms of Use and
              Privacy Policy.
            </Text>
            <LoginButton>Login</LoginButton>
            <CreateAccount>New to Yogita Dresses? Create an Account</CreateAccount>
          </Wrapper>
           */}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDiaglog;
