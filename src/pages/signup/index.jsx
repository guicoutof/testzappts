import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from '../slider';
import Input from '../../components/Inputs';

import GoogleImg from '../../assets/images/google.png';

function Signup(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
                        label="Password" 
                        name="password" 
                        type='password' 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </form>       


                <button className="signInBtn">Sign up</button>

                <div className="divider">
                    <hr style={{width: '40%'}}></hr>
                    <p>Or</p>
                    <hr style={{width: '40%'}}></hr>
                </div>

                <button className="googleBtn">
                    <img className="imgG" alt="Google Icon"src={GoogleImg} />
                    Sign up with Google
                </button>

                <div className="textPolicy">
                    <p>By signing up, you agree to <strong>Invision</strong></p>
                    <div>
                        <a href="#">Terms of Condition</a>
                        and
                        <a href="#">Privacy Policy</a>
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