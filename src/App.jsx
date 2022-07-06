import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom'
import Palette from './Pages/Palette/Palette';
import SinglePalette from './Pages/SinglePalette/SinglePalette';


function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path={'/'} element={<Palette />} />
        <Route path={'/pallete'}>
          <Route path=':id' element={<SinglePalette />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
