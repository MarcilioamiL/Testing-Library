import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Teste o componente FavoritePokemons', () => {
  beforeEach(() => {
    renderWithRouter(<FavoritePokemons />);
  });
  it(`Test se é exibido na tela a mensagem no favorite pokemon found, 
  se a pessoa não tiver pokémons favoritos.`, () => {
    const favoriteMensage = screen.getByText(/no favorite pokemon found/i);
    expect(favoriteMensage).toBeDefined();
  });
  it('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);
    const details = screen.getByText(/more details/i);
    userEvent.click(details);

    const favoriteCheck = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(favoriteCheck);

    history.push('/favorites');
    const pokemonFavorite = screen.getByText(/Pikachu/i);
    expect(pokemonFavorite).toBeDefined();
  });
});
