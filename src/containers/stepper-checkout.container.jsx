import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import UpdateOutlinedIcon from "@material-ui/icons/UpdateOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

import AddressForm from "../components/chackout/address-form.component";
import DelivertTime from "../components/chackout/delivery-time.component";
import DeliveryInstructions from "../components/chackout/delivery-instructions.component";
import MobileNumber from "../components/chackout/mobil-number.component";
import CheackoutItems from "../components/chackout/checkout-items.component";


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(6),

    width: "100%",
    "& .MuiStepper-root": {
      padding: 0,
      width: "100%",
    },
    "& .MuiStepLabel-root": {
      padding: 24,
    },

    "& .MuiStepConnector-vertical": {
      padding: "0",
      marginLeft: "0",
    },
    "& .MuiStepContent-root": {
      marginTop: 0,
      borderLeft: "none",
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
    "& .MuiStepConnector-lineVertical": {
      minHeight: 0,
      borderLeftStyle: "none",
      borderBottom: "1px solid rgb(229, 237, 236)",
      borderLeftWidth: 1,
    },
    "& .MuiStepLabel-iconContainer": {
      paddingLeft: 8,
    },
  },
  stepLabel: {
    //padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(4),
  },
  icon: {
    marginLeft: theme.spacing(3),
  },
  resetContainer: {
    //marginRight: theme.spacing(5),

    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    borderTop: "1px solid rgb(229, 237, 236)",
    
  },
  payment: {
    backgroundColor: "#1565c0",
    color: theme.palette.background.paper,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#0d47a1",
    },
  },
  title:{
    marginTop: theme.spacing(2),
  }
}));

const useColorlibStepIconStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: theme.palette.common.white,
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(122,228,93) 0%, rgb(67,177,43) 50%, rgb(0,128,10) 100%)",
  },
}));

const steps = [
  "آدرس ارسال",
  "زمان تحویل",
  "توضیح برای تحویل ",
  "شماره موبایل",
  "۴ مورد",
  //"پرداخت",
];

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <RoomOutlinedIcon />,
    2: <UpdateOutlinedIcon />,
    3: <LocalShippingOutlinedIcon />,
    4: <PhoneEnabledOutlinedIcon />,
    5: <LocalMallOutlinedIcon />,
    //6: <PaymentOutlinedIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <DelivertTime />;
    case 2:
      return <DeliveryInstructions />;
    case 3:
      return <MobileNumber />;
    case 4:
      return <CheackoutItems />;
    // case 5:
    //   return <PaymentForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
      <Grid container className={classes.paper}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label} className={classes.step}>
              <StepLabel
                StepIconProps={{ classes: { root: classes.icon } }}
                className={classes.stepLabel}
                StepIconComponent={ColorlibStepIcon}
              >
                {label}
              </StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                      color="primary"
                    >
                      قبل
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? "تایید کالاها"
                        : "بعدی"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography className={classes.title}>پرداخت با کلیه کارت‌های عضو شتاب</Typography>
            <Button
              onClick={handleReset}
              variant="contained"
              className={classes.payment}
              size="large"
            >
              پرداخت
            </Button>
          </Paper>
        )}
      </Grid>
    </React.Fragment>
  );
}
