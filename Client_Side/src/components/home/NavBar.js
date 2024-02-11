import { Box, Typography, styled } from "@mui/material";
import { NavData } from "../../constants/data";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifycontent: "space-between",
  overflow: "overlay",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));
const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Component>
      {NavData.map((data) => (
        <Container>
          <img
            src={data.logo}
            alt="nav"
            style={{ width: 300 }}
            onClick={() => navigate(`/prodfilter/${data.text}`)}
          />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
  );
};

export default NavBar;
