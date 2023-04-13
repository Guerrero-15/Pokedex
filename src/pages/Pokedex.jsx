import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokeCard from '../components/PokeCard';
import Pagination from '../components/Pagination';
import './styles/pokedex.css';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {
  const navigate = useNavigate();
  const { trainer } = useSelector((state) => state);

  const [pokemones, setPokemones] = useState();
  const [typeSelected, setTypeSelected] = useState('All pokemons');
  const [types, setTypes] = useState();
  const [page, setPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(8);
  const initialPoke = (page - 1) * pokePerPage;
  const finalPoke = page * pokePerPage;
  const maxPage = pokemones && Math.ceil(pokemones.length / pokePerPage);

  useEffect(() => {
    if (typeSelected !== 'All pokemons') {
      axios
        .get(typeSelected)
        .then((res) =>
          setPokemones(res.data.pokemon.map((e) => e.pokemon))
        )
        .catch((err) => console.log(err));
    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000000';
      axios
        .get(URL)
        .then((res) => setPokemones(res.data.results))
        .catch((err) => console.log(err));
    }
  }, [typeSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.search.value.trim().toLowerCase();
    navigate(`/pokedex/${input}`);
  };

  const handleChange = (e) => {
    setTypeSelected(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type';
    axios
      .get(URL)
      .then((res) => setTypes(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handlePokemonClick = (e, url) => {
    e.preventDefault();
    navigate(`/pokedex/pokemon/${url}`);
  };

  return (
    <div className='pokedex'>
      <h2 className='pokedex__title'>
        <span className='pokedex__span'>
          Welcome {trainer}, here you can find your favorite pokemon.
        </span>
      </h2>
      <div className='pokedex__options'>
        <form className='pokedex__form' onSubmit={handleSubmit}>
          <input
            className='pokedex__input'
            id='search'
            placeholder='Look for your pokemon'
            type='text'
          />
          <button className='pokedex__btn'>Search</button>
        </form>
        <select className='pokedex__select' onChange={handleChange}>
          <option value='All pokemons'>All pokemons</option>
          {types?.map((type) => (
            <option key={type.url} value={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <h3>HOLA UN PLACER, {trainer}</h3>
      {/* <h3>Aqui deberian de poner los pokemones</h3> */}

      <Pagination page={page} maxPage={maxPage} setPage={setPage} />
      <div className="poke-container">
  {pokemones?.slice(initialPoke, finalPoke).map((poke) => (
    <div key={poke.url} className="poke-card">
      <PokeCard url={poke.url} />
    </div>
  ))}
</div>

      <Pagination page={page} maxPage={maxPage} setPage={setPage} />
    </div>
  )
}

export default Pokedex