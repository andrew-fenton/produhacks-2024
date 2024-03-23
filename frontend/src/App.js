import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Button from '@mui/material/Button';

function App() {
  return (
      <div className="landingPage">
        <NavBar />
        <Button 
          className="uploadDataButton" 
          size="large" 
          variant="contained"> 
          Upload Data 
          </Button>
      </div>
  );
}

export default App;