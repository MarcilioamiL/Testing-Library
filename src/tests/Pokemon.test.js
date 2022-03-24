import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Teste o componente Pokemon.js', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it(`Teste se é renderizado um card com as
    informações de determinado pokémon.`, () => {
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName.textContent).toBe('Pikachu');
    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.textContent).toBe('Electric');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight.textContent).toBe('Average weight: 6.0 kg');
    const { src } = screen.getByAltText('Pikachu sprite');
    expect(src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it(`Teste também se a URL exibida no navegador muda para /pokemon/<id>,
  onde <id> é o id do Pokémon cujos detalhes se deseja ver;`, () => {
    const { history } = renderWithRouter(<App />);
    const details = screen.getAllByRole('link', { name: /More details/i });
    userEvent.click(details[1]);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/pokemons/25');
  });
  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    const licksDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(licksDetails);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    const { src } = screen.getByAltText('Pikachu is marked as favorite');
    expect(src).toBe('http://localhost/star-icon.svg');
  });
});
