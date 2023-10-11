import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input } from '@chakra-ui/react'
import Header from './components/Header';
function App() {
  return (
    <div className="container p-3 w-full h-full md:h-screen">
      <Header/>
      <Input/>
      <Button colorScheme='teal'>Submit now</Button>
    </div>
  );
}

export default App;
