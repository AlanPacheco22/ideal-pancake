import React from "react";
import { render, screen } from '@testing-library/react'; // Added import for render and screen
import Home from './page'; 

describe('Pruebas para el archivo page.js', () => {
  test('El encabezado contiene el texto "Neo-Pancake"', () => {
    render(<Home />);
    const headerText = screen.getByText('Neo-Pancake');
    expect(headerText).toBeInTheDocument();
  });

  test('El footer contiene el texto "© 2024 Página Neo-Pancake"', () => {
    render(<Home />);
    const footerText = screen.getByText('© 2024 Página Neo-Pancake');
    expect(footerText).toBeInTheDocument();
  });

});