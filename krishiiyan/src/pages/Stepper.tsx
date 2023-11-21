import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepDetails from "./StepDetails";
import BasalStep from "../Components/layouts/Calendar(CropAdvisory)/BasalStep";

export default function HorizontalLinearStepper({ cropDetails, date }: any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [activeDetails, setActiveDetails] = React.useState<any>(
    cropDetails[activeStep]
  );
  // const isStepOptional = (step: number) => {
  //   return step === 1;
  // };
  console.log(cropDetails);
  const [steps, setSteps] = React.useState<any>(cropDetails);
  const handleStepCount = () => {
    const currentDate = new Date();

    for (let i = 0; i < cropDetails.length; i++) {
      const startDate = new Date(cropDetails[i].date);
      const endDate = new Date(cropDetails[i + 1]?.date);

      if (currentDate >= startDate && (!endDate || currentDate < endDate)) {
        setActiveStep(i);
        break;
      }
    }
  };
  // console.log(cropDetails)
  const handleNext = () => {
    console.log(activeStep);
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
      return;
    }
    console.log("acctiveState before:", activeStep);
    let newStep = activeStep + 1;
    setActiveStep(newStep);
    console.log("activeStyate after:", activeStep);
    setActiveDetails(cropDetails[activeStep]);
  };
  const handleIndex = (index:number) => {
    console.log(activeStep);
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
      return;
    }
    console.log("acctiveState before:", activeStep);
    let newStep = index;
    setActiveStep(newStep);
    console.log("activeStyate after:", activeStep);
    setActiveDetails(cropDetails[activeStep]);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setActiveDetails(cropDetails[activeStep]);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(() => {
    setActiveDetails(cropDetails[activeStep]);
    if (activeStep == 0) {
      handleStepCount();
    }
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {cropDetails.map((step: any, index: any) => {
          const label = step.name;
          return (
            <Step
              key={index}
              onClick={() => {
                handleIndex(index);
              }}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length + 1 ? (
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
          <Typography sx={{ mt: 2, mb: 1 }}>
            {/* <StepDetails details={activeDetails}/> */}
            <BasalStep
              cropDetails={activeDetails}
              // stage={Object.keys(props?.cropDetails.cropStage)[step]}
            />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
