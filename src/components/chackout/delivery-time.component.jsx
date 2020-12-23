import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const RadioButtonsGroup = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        aria-label=""
        name="gender1"
        value={value}
        onChange={handleChange}
        
      >
        <FormControlLabel value="female" control={<GreenRadio />} label="3 تا 12" />
        <FormControlLabel value="male" control={<GreenRadio />} label="6 تا 3" />
        <FormControlLabel value="other" control={<GreenRadio />} label="9 تا 6" />
        <FormControlLabel value="madaer" control={<GreenRadio />} label="12 تا 9" />
      </RadioGroup>
    </FormControl>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const ScrollableTabsButtonAuto = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="شنبه" {...a11yProps(0)} />
        <Tab label="یکشنبه" {...a11yProps(1)} />
        <Tab label="دوشنبه" {...a11yProps(2)} />
        <Tab label="سشنبه" {...a11yProps(3)} />
        <Tab label="چهارشنبه" {...a11yProps(4)} />
        <Tab label="پنجشنبه" {...a11yProps(5)} />
        <Tab label="جمعه" {...a11yProps(6)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <RadioButtonsGroup />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RadioButtonsGroup />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RadioButtonsGroup />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <RadioButtonsGroup />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <RadioButtonsGroup />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <RadioButtonsGroup />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <RadioButtonsGroup />
      </TabPanel>
    </div>
  );
};

export default ScrollableTabsButtonAuto;
