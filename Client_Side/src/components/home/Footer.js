import styled from "@emotion/styled";
import { Box, List, ListItem } from "@mui/material";
import yd from "../newheader/logoimg/ydlogo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
const Dfooter = styled(Box)`
  padding: 40px 0 0 0;
  background: #808080;
  
`;

const Dflex = styled(Box)`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const Dlist = styled(List)`
  color: #fff;
`;

const Borderfooter = styled(List)`
    padding-left : 15px;
    border-left : 1px solid white;
`
const Footer = () => {
  return (
    <Dfooter>
      <Dflex>
        <Dlist>
          <List>
            <ListItem>About</ListItem>
            <ListItem><ContactsIcon/>Contact Us</ListItem>
            <ListItem><InfoIcon/>About Us</ListItem>
          </List>
        </Dlist>
        <Dlist>
          <List>
            <ListItem>Help</ListItem>
            <ListItem><PaymentIcon/>Payment</ListItem>
            <ListItem><LocalShippingIcon/>Shipping</ListItem>
            <ListItem><AssignmentReturnIcon/>Return Policy</ListItem>
          </List>
        </Dlist>
        <Dlist>
          <List>
            <ListItem>Social</ListItem>
            <ListItem><FacebookIcon></FacebookIcon>Facebook</ListItem>
            <ListItem><InstagramIcon/>Instagram</ListItem>
            <ListItem><WhatsAppIcon/>WhatsApp</ListItem>
          </List>
        </Dlist>
        <Dlist>
          <Borderfooter>
            <ListItem>MailUs :</ListItem>
            <ListItem>
              Yogita Dresses,
              <br />
              Kunalpanjwani91@gmail.com,
              <br />
              anilpanjwani90@gmail.com
            </ListItem>
          </Borderfooter>
        </Dlist>
        <Dlist>
          <List>
            <ListItem>Registered Shop Address:</ListItem>
            <ListItem>
              <img src={yd} width={200} ></img>
              <br></br>
              Yogita Dresses,<br/>
              Dr. Baba Saheb Complex
              <br />
              Shop No.: 112
              <br />
              Pachora : 424201
              <br />
              Distric : Jalgaon
              <br />
              Mobile No.:9028793585
              <br />
              Mobile No.: 8793176217
            </ListItem>
          </List>
        </Dlist>
      </Dflex>
    </Dfooter>
  );
};

export default Footer;
