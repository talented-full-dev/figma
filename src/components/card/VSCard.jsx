import * as React from "react";
import {
  Paper,
  Button,
  Typography,
  Grid,
  Avatar,
  AvatarGroup,
  Divider
} from "@mui/material";
import BadgeAvatar from "../avatar/BadgeAvatar";

export default function VSCard() {
  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1F1E29",
          borderRadius: "15px 15px 0px 0px",
          width: "100%",
          padding: "20px"
        }}
        elevation={4}
      >
        <BadgeAvatar />
        <Typography className="font16 poppins">VS</Typography>
        <BadgeAvatar />
      </Paper>
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "0px 0px 15px 15px"
        }}
        className="custom-black-light"
        elevation={4}
      >
        <Typography className="font16 poppins">52,405</Typography>
        <Typography className="font10 poppins">22,000-29,000</Typography>
        <Paper className="radius custom-black flex-row p-6 mb-4">
          <Grid container>
            <Grid item xs>
              <AvatarGroup max={3}>
                <Avatar alt="Remy Sharp" src="./assets/img/avatar (1).png" />
                <Avatar alt="Travis Howard" src="./assets/img/avatar (2).png" />
                <Avatar alt="Cindy Baker" src="./assets/img/avatar (3).png" />
              </AvatarGroup>
            </Grid>
            <Divider />
            <Grid item xs>
              <AvatarGroup max={3}>
                <Avatar alt="Remy Sharp" src="./assets/img/avatar (1).png" />
                <Avatar alt="Travis Howard" src="./assets/img/avatar (2).png" />
                <Avatar alt="Cindy Baker" src="./assets/img/avatar (3).png" />
              </AvatarGroup>
            </Grid>
          </Grid>
        </Paper>
        <Button
          className="radius custom-purple font16 poppins w-32 h-8"
          variant="contained"
        >
          Join
        </Button>
        <Button className="font10 poppins radius">View</Button>
      </Paper>
    </div>
  );
}
