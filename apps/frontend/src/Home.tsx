import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {

    }, []);
  return (
    <div>
        <h1>Welcome to the Game</h1>
        <p>Click the button below to enter the arena.</p>
        <button onClick={() => navigate(`/spaces/`)}>click here to join Arena</button>
    </div>
  )
}

export default Home