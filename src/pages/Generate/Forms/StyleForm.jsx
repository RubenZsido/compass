import { Box, Card, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const StyleForm = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={4}>
        <Paper elevation={5} sx={{ height: "400px" }}></Paper>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default StyleForm;
