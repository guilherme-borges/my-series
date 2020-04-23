import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function SignUp() {

    const [ name, setName ] = useState('');
    const [ last_name, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const history = useHistory();

    async function handleSignUp(e) {
        e.preventDefault();

        try {
            await api.post('users', { email, name, last_name, password });

            alert('Registrado com sucesso!');
            
            history.push('/');


        } catch (error) {
            alert('Erro ao se registrar, tente novamente.' + error);            
        }
    }

    return (
        <div className="logon-container">
            <h1>My Series</h1>
            <form onSubmit={handleSignUp}>
                <input type="text" placeholder="Digite seu nome" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input type="text" placeholder="Digite seu sobrenome" 
                    value={last_name}
                    onChange={e => setLastName(e.target.value)}
                />

                <input type="email" placeholder="Digite o e-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                
                <input type="password" placeholder="Digite a senha" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="button">Registrar-se</button>
            </form>
        </div>
    );
}