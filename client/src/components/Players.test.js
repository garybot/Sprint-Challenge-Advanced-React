import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Players from './Players.js';

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  const players = [
  { name: "Alex Morgan", country: "United States", searches: 100 },
  { name: "Megan Rapinoe", country: "United States", searches: 99 },
  { name: "Marta", country: "Brazil", searches: 18 }];
  rtl.render(<Players list={players} />);
}) 