import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Players from './Players.js';

afterEach(rtl.cleanup);

const players = [
{ name: "Alex Morgan", country: "United States", searches: 100 },
{ name: "Megan Rapinoe", country: "United States", searches: 99 },
{ name: "Marta", country: "Brazil", searches: 18 }];

test('renders without crashing', () => {
  rtl.render(<Players list={players} />);
});

test('displays three elements with text "Name:"', () => {
  const { getAllByText } = rtl.render(<Players list={players} />);
  getAllByText(/Name:/).length === 3;
})