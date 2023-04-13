import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'



const Home = () => {

    // Nos ayuda a acceder a cualqueir almacenador de datos dentro de Redux
    const dispatch = useDispatch()
    //Navigate nmos ayuda a movernos entre paginas
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate("/pokedex")
    }


    return (
        <article>
            <h1>HI TRAINER PLEASE PUT YOUR NAME HERE</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='YOUR NAME' id='name' className="home-input"/>
                <button className="home-button">START</button>
            </form>



        </article>
    )
}

export default Home