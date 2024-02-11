import { useState } from "react";

import {AppBar,Toolbar,Box,styled,IconButton,Drawer,List,ListItem} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import logoyd from "./logoimg/ydlogo.png"

const StyledHeader = styled(AppBar)`
  background: #808080;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 5%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width:200}} onClick={handleClose} >
      <List>
        <ListItem ButtonBase>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
           {list()}
        </Drawer>
        <Component>
          <img src={logoyd} alt="logo" style={{ width : 170 }} />
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
