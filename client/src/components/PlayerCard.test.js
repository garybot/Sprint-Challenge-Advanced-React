import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerCard from './PlayerCard.js';

afterEach(rtl.cleanup);

const data = { name: "Alex Morgan", country: "United States", searches: 100 };

test('renders without crashing', () => {
  rtl.render(<PlayerCard player={data} />);
})

test('Displays h1 with text "Alex Morgan"', () => {
  const container = rtl.render(<PlayerCard player={data} />);
  container.getByText('Alex Morgan')
}) 