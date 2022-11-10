import "./App.css";
import { Grid } from "@mui/material";
import Header from "./layout/Header";
import ChatList from "./layout/ChatList";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import "@fontsource/poppins";
function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <ChatList />
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Header />
        <Navbar />
        <Home />
      </Grid>
    </Grid>
  );
}

export default App;
