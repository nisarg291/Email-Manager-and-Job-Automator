import React from 'react';
import { useHistory } from 'react-router-dom';

const GoogleLogin = () => {
    const history = useHistory();

    const handleLogin = () => {
        // Redirect to the backend OAuth endpoint
        window.location.href = 'http://your-django-backend.com/oauth/google';
    };

    return (
        <div>
            <h2>Login with Google</h2>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default GoogleLogin;