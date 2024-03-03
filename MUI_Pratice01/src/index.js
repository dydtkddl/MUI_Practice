import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/styles";
import {createTheme } from "@mui/material"
const theme = createTheme();
ReactDOM.render(<ThemeProvider theme = {theme}><App/></ThemeProvider>, document.getElementById("root"));