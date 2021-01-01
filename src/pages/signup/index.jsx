import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from '../slider';
import Input from '../../components/Inputs';

import GoogleImg from '../../assets/images/google.png';

import './styles.css';

function Signup(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSignUp(){
        if(!email || !name || !password){
            alert('Preencha todos os campos');
        }else {
            alert(`Cadastro com nome: ${name}, email: ${email} e senha: ${password}`);
        }
    }

    return(
        <div className="container">
            <Slider />
            <div className="signInMain">
                <h2 className="title" >Invision</h2>
                <h4 className="subtitle" >Getting Started</h4>
                
                <form className="form">
                    <Input 
                        label="Full Name" 
                        name="name" 
                        type='name' 
                        placeholder="Name" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input 
                        label="Users name or Email" 
                        name="email" 
                        type='email' 
                        placeholder="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input 
                        label="Create Password" 
                        name="password" 
                        type='password' 
                        value={password}
                        minLength="6"
                        onChange={e => setPassword(e.target.value)}
                    />
                </form>       


                <button className="signInBtn" onClick={() => handleSignUp()}>Sign up</button>

                <div className="divider">
                    <hr style={{width: '34%'}}></hr>
                    <p>Or</p>
                    <hr style={{width: '34%'}}></hr>
                </div>

                <button className="googleBtn">
                    <img className="imgG" alt="Google Icon"src={GoogleImg} />
                    Sign up with Google
                </button>

                <div className="policy">
                    <span >By signing up, you agree to <strong>Invision</strong></span>
                    <div className="policyTerms">
                        <a href="#" className="terms">Terms of Condition</a>
                        and
                        <a href="#" className="terms">Privacy Policy</a>
                    </div>
                </div>

                <div className="footer">
                    <div>Already on <strong>Invision</strong>?</div>
                    <Link to="/">
                        Log in
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Signup;