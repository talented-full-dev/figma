import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import VSCard from "../card/VSCard";

export default function VSPaper() {
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
        marginTop: "33px",
        height: "800px",
        overflow: "auto"
      }}
    >
      <Grid container spacing={5}>
        {[...new Array(24)].map((item, key) => (
          <Grid item xs={12} sm={6} md={4}>
            <VSCard key={key} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
