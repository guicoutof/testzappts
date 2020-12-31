import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from '../slider';
import Input from '../../components/Inputs'

import GoogleImg from '../../assets/images/google.png'

import './styles.css';

function Signin(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <div className="container">
            <Slider />
            <div className="signInMain">
                <h2 className="title" >Invision</h2>
                <h4 className="subtitle" >Welcome to Invision</h4>
                
                <form className="form">
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
                    <a className="forgot">Forgot password?</a>
                </form>       


                <button className="signInBtn">Sign In</button>

                <div className="divider">
                    <hr style={{width: '40%'}}></hr>
                    <p>Or</p>
                    <hr style={{width: '40%'}}></hr>
                </div>

                <button className="googleBtn">
                    <img className="imgG" src={GoogleImg} />
                    Sign in with Google
                </button>

                <div className="footer">
                    <div>New <strong>Invision</strong>?</div>
                    <Link to="/sign-up">
                        Create Account
                    </Link>
                </div>

            </div>          
        </div>
    )
}

export default Signin;