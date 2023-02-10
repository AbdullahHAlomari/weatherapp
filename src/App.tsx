import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WeatherApi from './components/WeatherApi'
import { ChakraProvider } from '@chakra-ui/react'
import { Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    // hello
    // <Routes>
    <ChakraProvider>
      
      <WeatherApi/>      
    
    </ChakraProvider>
    /* </Routes> */
  )
}

export default App
