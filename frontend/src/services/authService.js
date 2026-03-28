'use strict';

import axios from 'axios';

const API_URL = 'https://api.example.com';

// Login function to authenticate user and retrieve token
export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password });
        // Store token in localStorage
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        throw new Error('Login failed.');
    }
};

// Logout function to remove token
export const logout = () => {
    localStorage.removeItem('token');
};

// Function to get the current token
export const getToken = () => {
    return localStorage.getItem('token');
};

// API call function with token management
export const apiCall = async (endpoint, method = 'GET', data = null) => {
    const token = getToken();
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    
    try {
        const response = await axios({ url: `${API_URL}/${endpoint}`, method, headers, data });
        return response.data;
    } catch (error) {
        throw new Error('API call failed.');
    }
};
