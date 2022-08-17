import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <nav>
        <div class="site-title">
      <a href="/"><h1>Notes </h1></a>
      <h2>A Note taking Site</h2>
      <p>Please signin or signup to continue</p>
    </div>
        <ul>   
        <Link to="/signIn">
          <button>SignIn</button>
        </Link>
        <br />
        <br />
        <Link to="/signUp">
          <button>SignUp</button>
        </Link>
        </ul>
        </nav>
      
    )
  }

export default Home;