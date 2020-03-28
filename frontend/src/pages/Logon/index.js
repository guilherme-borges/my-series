import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Logon() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { email, password });

            history.push('/dashboard');

            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('userName', response.data.name);

        } catch (error) {
            alert('Erro ao fazer login, tente novamente.');            
        }
    }

    return (
        <div className="logon-container">
            <h1>My Series</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Digite o e-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Digite a senha" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="button">Entrar</button>
            </form>
        </div>
    );
}