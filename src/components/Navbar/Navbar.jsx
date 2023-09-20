import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Navbar() {

    const date = new Date().toDateString();
    

    return (
        <div className='navbar-div'>
            <div className='nav-left-handles'>
                <Link className='link-element'><ArrowLeftIcon />Previous Week</Link>
                <p className="todays-date">{date}</p>
            </div>
            <div className='nav-right-handles'>
                <Link className='link-element'>Next Week <ArrowRightIcon /></Link>
            </div>
        </div>
    )
}

export default Navbar
