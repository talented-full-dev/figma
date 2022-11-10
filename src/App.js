import "./App.css";
import { Grid } from "@mui/material";
import Header from "./layout/Header";
import ChatList from "./layout/ChatList";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <ChatList />
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Header />
      </Grid>
    </Grid>
  );
}

export default App;
