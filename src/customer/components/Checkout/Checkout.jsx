import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import OrderSummary from './OrderSummary';
import DeliveryAddressForm from './DeliveryAddressForm';

const steps = ['Login', 'Delivery Address', 'Order Summary','Payment'];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step = queryParams.get('step');
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  

  return (
    <div className='px-10 lg:px-20'>
<Box sx={{ width: '100%' }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        
        </React.Fragment>
      ) : (
        <React.Fragment>
  
  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 2 }}>
    <Button 
      color="inherit"
      disabled={activeStep === 0}
      onClick={handleBack}
     
    >
      Back
    </Button>

   
  </Box>

  <div className="mt-10">
            {step === 2? <DeliveryAddressForm/>:<OrderSummary/>}
          </div>
</React.Fragment>
     )}
    </Box>

    </div>
     
  );
}