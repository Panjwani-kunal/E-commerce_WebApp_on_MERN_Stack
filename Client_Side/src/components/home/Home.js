

//Components

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import Detail from "./Detail";
import Footer from "./Footer";
import { Box, Divider, styled } from "@mui/material";


const Component = styled(Box)`
    padding : 10px;
    background : #F2F2F2;
`

const Home = () => {
    return(
        <>
            <NavBar/>
            <Component>
                <Banner/>
                <Slide/>
                <Divider/>
                <Detail/>
                <Footer/>
            </Component>
        </>
        

    )
}
export default Home;