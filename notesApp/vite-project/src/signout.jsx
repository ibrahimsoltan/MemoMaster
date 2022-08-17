import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Signout() {
    return (
        <ul>
        <Link to="/">
          <button>Sign out</button>
        </Link>
        
        </ul>
      
    )
  }

export default Signout;