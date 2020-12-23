import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const CustomizedTextField = withStyles({
  //.MuiInputLabel-outlined.MuiInputLabel-shrink {
  //    transform: translate(14px, -6px) scale(0.75);
  //.MuiInputLabel-shrink

  root: {
    "& ": {
      //height: "56px",

      "& label": {
        width: "200px",
        textAlign: "right",
        paddingRight: "20px",
        color: "rgb(117, 117, 117)",

        fontSize: "16px",
        left: "100%",
        transform: "translate(-100%, 18px)",
        transformOrigin: "top right",
        //transform: "translate(0, 14px) scale(1)",
      },
      "& .MuiInputLabel-shrink": {
        paddingRight: "8px",
        transform: "translate(-100%, 5px) scale(0.80)",
        transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
        color: "rgb(67, 176, 42)",
      },
      "& .MuiInputBase-root": {
        "& input": {
          color: "rgb(66, 66, 66)",
          fontSize: "16px",
          padding: "25px 8px 8px",
          //height: "56px",
          //boxSizing: 'border-box'
        },
        "& fieldset": {
          "& legend": {
            "& span": {
              display: "none",
            },
          },
        },
      },
    },
  },
})(TextField);
