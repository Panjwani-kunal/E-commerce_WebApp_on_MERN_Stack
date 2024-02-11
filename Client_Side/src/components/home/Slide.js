import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductSliData } from "../../constants/data";
import styled from "@emotion/styled";
import { Box, Typography, Divider } from "@mui/material";
const Image = styled("img")({
  width: 'auto',
  height: 280,
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
`;

const Ap = styled(Box)`
  padding: 10px;
`;

const Ap2 = styled(Typography)`
  font-size: 22px;
  font-weight: 650;
  text-align: center;
`;



const Slide = () => {
  return (
    <Component>
      <Ap>
        <Ap2>All Products</Ap2>
        <Divider />
      </Ap>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {ProductSliData.map((data) => (
          <Box textAlign="center" style={{padding: '20px 15px'}} >
            <Image src={data.url} alt="banner" />
          </Box>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
