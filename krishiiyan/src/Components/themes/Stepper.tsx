import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import BasalStep from "../layouts/Calendar(CropAdvisory)/BasalStep";
import V4step from "../layouts/Calendar(CropAdvisory)/V4step";
import V8step from "../layouts/Calendar(CropAdvisory)/V8step";
import VTstep from "../layouts/Calendar(CropAdvisory)/VTstep";
import GFstep from "../layouts/Calendar(CropAdvisory)/GFstep";

const steps = [
  "Basal(at Sowing)",
  "V4(four leaf stage)",
  "V8(eight leaf stage)",
  "VT(tasseling stage)",
  "GF(grain filling stage)",
];

export default function HorizontalNonLinearStepper(props: any) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const Content = (step: any) => {
    switch (step) {
      case 0:
        return <BasalStep cropDetails={props?.cropDetails} />; //at Sowing
      case 1:
        return <V4step cropDetails={props?.cropDetails} />; //four leaf stage
      case 2:
        return <V8step cropDetails={props?.cropDetails} />; //eight leaf stage
      case 3:
        return <VTstep cropDetails={props?.cropDetails} />; //tasseling stage
      case 4:
        return <GFstep cropDetails={props?.cropDetails} />; //grain filling stage
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="success" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Grid container>
              <Grid item xs={12} sx={{ padding: "20px" }}>
                {Content(activeStep)}
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
