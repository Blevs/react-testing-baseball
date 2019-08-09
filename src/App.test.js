import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App.js';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
  it('One Big Test', () => {
    const {getByText} = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);

    // Test that strike works
    fireEvent.click(strike);
    fireEvent.click(strike);
    getByText(/Strikes: 2/);

    // Test that ball works
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/Balls: 3/);

    // Test that strike rolls over the count
    fireEvent.click(strike);
    getByText(/Strikes: 0/);
    getByText(/Balls: 0/);

    // Test that strike rolls over the count
    fireEvent.click(strike);
    fireEvent.click(strike);
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    fireEvent.click(ball);
    getByText(/Strikes: 0/);
    getByText(/Balls: 0/);

    // Test that foul doesn't increase strikes past 2
    fireEvent.click(foul);
    getByText(/Strikes: 1/);
    fireEvent.click(foul);
    getByText(/Strikes: 2/);
    fireEvent.click(foul);
    getByText(/Strikes: 2/);

    // Check that hit resets count
    fireEvent.click(strike);
    fireEvent.click(ball);
    fireEvent.click(hit);
    getByText(/Strikes: 0/);
    getByText(/Balls: 0/);
    
  });
});
