import React from 'react'
import { Link } from 'react-router-dom'

function Navigation(){
    return(
        <nav className='App-navigation'>
            <Link to='/'>Home</Link>
            <Link to='/add-exercise'>Log a Lift</Link>

        </nav>
    )
}

export default Navigation