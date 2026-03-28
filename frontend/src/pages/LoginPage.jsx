import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, googleProvider } from '../firebase'; // Import your firebase configuration
import './LoginPage.css'; // Optional: Add styles for this component

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleEmailLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                history.push('/'); // Redirect to the home page
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const handleGoogleLogin = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                history.push('/'); // Redirect to the home page
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleEmailLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default LoginPage;