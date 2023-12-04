import * as React from "react";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import useMediaQuery from "@mui/material/useMediaQuery";



export default function PaginationComp(props) {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Pagination
      count={props.count}
      shape="rounded"
      size={matches ? "small" : "medium"}
      sx={{
        "& .MuiButtonBase-root": {
          height: 45,
          width: 25,
          borderRadius: 3,
          background: "#F2F2F2",
          margin: "0 5px",
        },
        "& .MuiButtonBase-root-MuiPaginationItem-root": {
          background: "#FF6D00!important",
          color: "#ffffff",
        },
        "& .Mui-selected": {
          background: "#FF6D00!important",
          color: "#ffffff",
        },
        "& .Mui-selected:hover": {
          background: "#FF6D00!important",
          color: "#ffffff",
          boxShadow: "0 0 5px 1px rgba(255,109,0,1)",
        },
      }}
    />
  );
}
