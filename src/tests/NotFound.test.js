import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import NotFound from '../components/NotFound';

describe.only('Verificando o componente NotFound.js', () => {
  beforeEach(() => {
    renderWithRouter(<NotFound />);
  });
  it('Test se página contém um heading h2 com o texto Page requested not found 😭', () => {
    const texto = screen.getByText(/page requested not found/i);
    expect(texto).toBeDefined();
  });
  it('Teste se página mostra a imagem', () => {
    const img = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(img).toHaveAttribute('src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
