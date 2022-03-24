import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe(' Teste o componente Pokedex.js', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });
  it('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    const text = screen.getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(text).toBeDefined();
  });
  it(`Teste se é exibido o próximo Pokémon da lista quando o
  botão Próximo pokémon é clicado`, () => {
    const btn = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(btn);
    const btnPokemon = screen.getByText('Charmander');
    expect(btnPokemon).toBeDefined();
  });
  it('Teste se é mostrado apenas um Pokémon por vez', () => {
    const pokemon = screen.getAllByRole('link', { name: /More details/i });
    expect(pokemon).toHaveLength(1);
  });
  it('Teste se a Pokédex tem os botões de filtro', () => {
    const number = 7;
    const btnFilter = screen.getAllByTestId('pokemon-type-button');
    expect(btnFilter).toHaveLength(number);
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const btnPoko = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(btnPoko).toBeDefined();

    const allBtnsClear = screen.getByRole('button', { name: 'All' });
    userEvent.click(allBtnsClear);
    const allBtn = screen.getByText('Pikachu');
    expect(allBtn).toHaveTextContent('Pikachu');
  });
});
