import React, { useState } from 'react';
import Startups from './Startups';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
    {/* <h1>Hello everybody</h1> */}
    <Startups />
    <Startups />
    <Startups />
    </Container>
  );
}

export default App;
