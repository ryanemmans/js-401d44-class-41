import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/components/Home';
import { Container } from './src/styles/appStyles';

export default function App() {
  console.log('App executed');
  
  return (
    <Container>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}
