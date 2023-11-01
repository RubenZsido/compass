import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material/";
import BasicForm from "./Forms/BasicForm";
import StyleForm from "./Forms/StyleForm";
import LayoutForm from "./Forms/LayoutForm";
import HostingForm from "./Forms/HostingForm";
import { validations } from "./Validations/validations";

const GeneratePage = () => {
  const steps = ["Basics", "Style", "Layout", "Hosting"];
  //const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidation = validations[activeStep];

  const getWord = (array, beginning, end) => {
    return array.slice(beginning, end).join("");
  };
  const getEndIndexes = (charArray) => {
    const endIndexes = [];
    for (let i = 0; i < charArray.length; i++) {
      const char = charArray[i];
      if (i + 1 === charArray.length) {
        break;
      }
      const nextChar = charArray[i + 1];
      if (nextChar === char) {
        endIndexes.push(i + 1);
      }
    }
    return endIndexes;
  };
  const LNRCS = (str) => {
    console.clear();
    const charArray = str.split("");
    const endIndexes = getEndIndexes(charArray);
    const words = [];
    let prevEnd = 0;
    for (let i = 0; i < endIndexes.length; i++) {
      const endindex = endIndexes[i];
      words.push(getWord(charArray, prevEnd, endindex));
      prevEnd = endindex;
    }
    words.push(
      getWord(
        charArray,
        endIndexes[endIndexes.length - 1],
        charArray[charArray.length]
      )
    );
    console.log(words);
    console.log('longest:' + words.);
    
  };

  LNRCS("ABCDDEFGHHIIJKLMNNOPQRSSSTUV");

  const _renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicForm />;
      case 1:
        return <StyleForm />;
      case 2:
        return <LayoutForm />;
      case 3:
        return <HostingForm />;
      default:
        return <div>Not Found</div>;
    }
  };

  const _sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={8}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          sx={{ padding: "50px 100px" }}
        >
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h2" component="h3" align="center">
          {steps[activeStep]}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Paper elevation={5} sx={{ height: "60vh", margin: "50px" }}>
          <BasicForm />
          <Grid
            container
            spacing={5}
            justifyContent="space-evenly"
            sx={{ width: "100%" }}
          >
            <Grid justifyContent="start" item xs={5}>
              <Button
                disabled={activeStep == 0}
                onClick={() => setActiveStep((prev) => prev - 1)}
                variant="contained"
              >
                Back
              </Button>
            </Grid>
            <Grid justifyContent="end" item xs={5}>
              <Button
                variant="contained"
                onClick={() => setActiveStep((prev) => prev + 1)}
                disabled={activeStep == steps.length - 1}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GeneratePage;