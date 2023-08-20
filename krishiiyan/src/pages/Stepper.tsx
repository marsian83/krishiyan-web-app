import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepDetails from './StepDetails';
import BasalStep from '../Components/layouts/Calendar(CropAdvisory)/BasalStep';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalLinearStepper({cropDetails} : any) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [activeDetails , setActiveDetails] = React.useState<any>(cropDetails[0]);
    console.log(cropDetails)
  const isStepOptional = (step: number) => {
    return step === 1;
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setActiveDetails(cropDetails[activeStep])
    console.log(activeDetails)
};

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setActiveDetails(cropDetails[activeStep])
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(()=>{
    setActiveDetails(cropDetails[activeStep]);
  })

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {cropDetails.map((step:any, index:any) => {
          const label = step.name; 
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
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
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}