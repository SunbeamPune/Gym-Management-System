import React from 'react';
import ReactDOM from 'react-dom/client';
import Controller from './Screens';
// import $ from 'jquery';
// import Popper from 'popper.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={darkTheme}>
         <CssBaseline />
                <Controller/>  
     </ThemeProvider>
    
);

