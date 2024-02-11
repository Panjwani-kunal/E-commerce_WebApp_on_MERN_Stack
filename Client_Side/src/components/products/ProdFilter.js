import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import BasicTabs from "./VartTab";
import { useParams } from "react-router-dom";


const Halfsection = styled(Grid)`
  background: #808080;
  height: 100vh;
  color: white;
`;

const Head = styled(Typography)`
  padding: 10px;
`;

const ProdFilter = () => {
  const { ptype } = useParams();
  return (
    <Grid container>
      <Halfsection item xs={2}>
        Filter
      </Halfsection>
      <Grid item xs={10}>
        <Head variant="h4" gutterBottom>
        {ptype}
        </Head>
        <Divider />
        <BasicTabs type={ptype} />
        
      </Grid>
    </Grid>
  );
};

export default ProdFilter;
