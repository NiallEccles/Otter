import '@testing-library/jest-dom';
import { render, screen } from './utils/test.utils';
import App from './App';
import React from 'react';

describe('App', () => {
  it('Should render the App correctly', async () => {
    render(<App/>);
    expect(screen.getByText('Hello there!')).toBeInTheDocument();
  })
})