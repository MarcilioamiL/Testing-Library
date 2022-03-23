import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

// requisito 1

describe('Teste se o topo da aplicação contém um conjunto fixo de links', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it('verifica se o primeiro link deve possuir o texto Home', () => {
    const home = screen.getByText('Home');
    expect(home).toBeDefined();
  });
  it('O segundo link deve possuir o texto About', () => {
    const about = screen.getByText('About');
    expect(about).toBeDefined();
  });
  it('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    const favoritePokemons = screen.getByText('Favorite Pokémons');
    expect(favoritePokemons).toBeDefined();
  });
});
