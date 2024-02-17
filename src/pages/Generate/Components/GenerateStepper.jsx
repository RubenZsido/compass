import React from "react";
import PropTypes from "prop-types";
import { Grid, Step, StepLabel, Stepper } from "@mui/material/";

export const GenerateStepper = ({ steps, activeStep }) => {
  return (
    <Grid item xs={8} sx={{ margin: "0px", padding: "0px" }}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        sx={{ padding: "10px 10px" }}
      >
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Grid>
  );
};
GenerateStepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  activeStep: PropTypes.number,
};
