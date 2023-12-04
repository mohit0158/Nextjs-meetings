import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const ToggleSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 100,
  height: 60,
  padding: 10,
  "& .MuiSwitch-switchBase": {
    padding: 10,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(37px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        background:
          theme.palette.mode === "dark"
            ? "#2ECA45"
            : "linear-gradient(180deg, #ff9749 2.6%, #ff6d00 78.97%)",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 1,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 36,
    height: 36,
  },
  "& .MuiSwitch-track": {
    borderRadius: 50 / 2,
    height: 40,
    width: 77,
    backgroundColor: theme.palette.mode === "light" ? "#D1D1D1" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function SwitchButton( props) {
  return (
    <ToggleSwitch
      sx={{ m: 1 }}
      checked={props.checked}
      onChange={props.onChange}
    />
  );
}
