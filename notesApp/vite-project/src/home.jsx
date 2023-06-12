

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './App.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1 className="site-title">Notes</h1>
            </div>
            <div className="home-content">
                <div className="buttons-container">
                    <Link to="/signIn" className="home-button">
                        Sign In
                    </Link>
                    <Link to="/signUp" className="home-button">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
