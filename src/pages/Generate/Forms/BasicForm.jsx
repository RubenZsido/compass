import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";

const BasicForm = () => {
  return (
    <Grid container justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        sx={{ margin: "50px", width: "100%" }}
      >
        <TextField sx={{ marginBottom: "20px" }} label="Company Name*" />
        <TextField
          sx={{ marginBottom: "20px" }}
          label="Description(Optional)"
          multiline
          maxRows={7}
        />
        <TextField sx={{ marginBottom: "20px" }} label="Price" />
      </Box>
    </Grid>
  );
};

export default BasicForm;
