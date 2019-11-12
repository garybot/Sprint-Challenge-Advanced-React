import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  rtl.render(<App />);
});
