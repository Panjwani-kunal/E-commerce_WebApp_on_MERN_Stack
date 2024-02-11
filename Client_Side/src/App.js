import logo from "./logo.svg";
import "./App.css";
import Header from "./components/newheader/Header";
import Search from "./components/newheader/Search";
import Home from "./components/home/Home";

import { Box } from "@mui/material";
import AppRoute from "./components/AppRoute";

function App() {
  return (
    <div>
      
      <Box style={{ marginTop: 54 }}>
        <AppRoute />
      </Box>
    </div>
  );
}

export default App;
