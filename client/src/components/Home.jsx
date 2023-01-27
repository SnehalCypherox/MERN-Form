import { Button, Paper } from '@mui/material'
import '../App.css'
import React from 'react'
import LoginForm from './Form/LoginForm'

const Home = () => {
    const logOut = (e) => {
        e.preventDefault();
        console.log("clicked");
    }

    return (
        <>
            <Paper elevation={3} className="home">
                <h1>Home</h1>
                <Button variant='outlined' className='logout-btn' onClick={logOut}>Logout</Button>
            </Paper>
        </>

    )
}

export default Home