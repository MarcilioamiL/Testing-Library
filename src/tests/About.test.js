import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { About } from '../components';

describe('Teste se a página contém as informações sobre a Pokédex', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const about = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(about).toBeDefined();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const paragrafo1 = screen.getByText(/This application simulates a Pokédex/i);
    expect(paragrafo1).toBeDefined();

    const paragrafo2 = screen.getByText(/One can filter Pokémons by type, and see more/i);
    expect(paragrafo2).toBeDefined();
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', url);
  });
});
