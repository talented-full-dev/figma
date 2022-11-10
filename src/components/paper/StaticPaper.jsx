import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function StaticPaper() {
  const staticData = [
    { name: "All Games", data: 7 },
    { name: "Total Value", data: 62467 },
    { name: "Joinable Games", data: 4 }
  ];
  return (
    <Box
      className="w-full"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1822",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: "15px",
        padding: "25px 15px",
        marginTop: "33px"
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={7}
          className="flex justify-around items-center w-full px-10"
        >
          {staticData.map((item, key) => (
            <div className="flex flex-col text-center" key={key}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  color: "white"
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "36px",
                  color: "white"
                }}
              >
                {item.data}
              </Typography>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={5} className="flex justify-end">
          <Button className="rad-btn custom-purple" variant="contained">
            Create
          </Button>{" "}
          &nbsp;&nbsp;
          <Button className="rad-btn custom-black-light" variant="contained">
            History
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
