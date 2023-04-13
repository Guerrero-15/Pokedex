import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Pokedex = ({ url }) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios
            .get(url)
            .then((res) => setPokemon(res.data))
            .catch((err) => console.log(err))


    }, [])

 
    const navigate = useNavigate()


    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }


    console.log(pokemon)
    return (
        <article onClick={handleClick}>
            <header >
                <img className='poke-card__sprite'
                    src={pokemon?.sprites["back_shiny"]}
                    alt=""
                />
            </header>


            <section className='poke-card__body'>
                <h3 >{pokemon?.name}</h3>
                <ul >
                    {pokemon?.types.map((type) => (
                        <li className='poke-card__type' key={type.type.name}>{type.type.name}</li>
                    ))}
                </ul>
            </section>


            <footer className='poke-card__footer'>
                <ul className='poke-card__stats-container'>
                    {pokemon?.stats.map((stat) => (
                        <li className='poke-card__stat' key={stat.stat.name}>
                            <span className='poke-card__label'>{stat.stat.name}: </span>
                            <span >{stat.base_stat}</span>
                        </li>
                    ))}
                </ul>
            </footer>
        </article>
    )
}

export default Pokedex