import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../../store/slices/username.slice';
import ash from '../img/ash.webp'

const UserInput = () => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState("")

    const navigate = useNavigate()

    const dispatchUsername = () => {
        dispatch(changeName(username))
        navigate("/pokedex")
    }

    return (
        <div className='user-input'>
            <h1>Hello trainer!</h1>
            <img src={ash} alt="ash" style={{width: '200px'}} className="ash" />
            <p>Giveme your name to start...</p>
            <input 
                className='user-bar'
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <button className='user-botton' onClick={dispatchUsername}>Send</button>
        </div>
    );
};

export default UserInput;