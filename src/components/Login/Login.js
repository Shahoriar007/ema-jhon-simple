import React from 'react';
import Auth from './use-auth';

const Login = () => {
    const auth = Auth();
    console.log(auth.user);
    return (
        <div>
            <h1>Wellcome to login</h1>
            {
                auth.user ? <button>Sign Out</button> :
                <button onClick={auth.signInWithGoogle}>Sign In with google</button>
            }
            
        </div>
    );
};

export default Login;