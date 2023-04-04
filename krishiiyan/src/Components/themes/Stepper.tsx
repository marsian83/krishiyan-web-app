import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Check from "@mui/icons-material/Check";
import { Grid } from "@mui/material";
import BasalStep from "../layouts/Calendar(CropAdvisory)/BasalStep";
import V4step from "../layouts/Calendar(CropAdvisory)/V4step";
import V8step from "../layouts/Calendar(CropAdvisory)/V8step";
import VTstep from "../layouts/Calendar(CropAdvisory)/VTstep";
import GFstep from "../layouts/Calendar(CropAdvisory)/GFstep";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import moment from "moment";

// const steps = [
//   "Basal(at Sowing)",
//   "V4(four leaf stage)",
//   "V8(eight leaf stage)",
//   "VT(tasseling stage)",
//   "GF(grain filling stage)",
// ];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

export default function HorizontalNonLinearStepper(props: any) {
  const { active, className } = props;
  const [activea, setActivea] = useState(0);
  const [steps, setSteps] = useState<any[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});
  const completedRef = useRef<any>();
  const stepsRef = useRef<any>();
  const { timeLine } = props?.cropDetails;

  useEffect(() => {
    completedRef.current = completed;
  }, [completed]);

  useEffect(() => {
    stepsRef.current = steps;
  }, [steps]);

  useEffect(() => {
    if (!props?.cropDetails?.cropStage) return;
    let Stages = props?.cropDetails?.cropStage;
    const Steps = Object.values(Stages);
    setSteps(Steps);
    // console.log(Steps, "it is steps");
  }, [props?.cropDetails]);

  useEffect(() => {
    setInterval(() => {
      if (timeLine) {
        stepsRef.current.forEach((step: any, index: number) => {
          if (
            moment(timeLine[step?.Name_of_the_Stage?.name]).isBefore(
              moment()
            ) &&
            !completedRef.current[step.Name_of_the_Stage.name]
          ) {
            setCompleted((prev) => ({
              ...prev,
              [step.Name_of_the_Stage.name]: true,
            }));
            setActiveStep(index);
          }
        });
      }
    }, 1000);
  }, []);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.values(completed).filter((value) => value).length;
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
    // switch (step) {
    // case 0:
    //   return <BasalStep cropDetails={props?.cropDetails} />; //at Sowing
    // case 1:
    //   return <V4step cropDetails={props?.cropDetails} />; //four leaf stage
    // case 2:
    //   return <V8step cropDetails={props?.cropDetails} />; //eight leaf stage
    // case 3:
    //   return <VTstep cropDetails={props?.cropDetails} />; //tasseling stage
    // case 4:
    //   return <GFstep cropDetails={props?.cropDetails} />; //grain filling stage

    // default:

    // return <div>404: Not Found</div>;

    // }
    return (
      <BasalStep
        cropDetails={props?.cropDetails}
        stage={Object.keys(props?.cropDetails.cropStage)[step]}
      />
    ); //at Sowing
  };
  // console.log(completed);

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step
            key={step?.Name_of_the_Stage?.name}
            completed={completed[step?.Name_of_the_Stage?.name]}
          >
            <StepButton color="success" onClick={handleStep(index)}>
              <span>
                {step?.Name_of_the_Stage?.name} <br />
                {timeLine &&
                  moment(timeLine[step?.Name_of_the_Stage?.name]).format(
                    "MMM Do YY"
                  )}
              </span>
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
