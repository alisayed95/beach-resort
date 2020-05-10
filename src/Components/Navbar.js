import React, { useState } from 'react';
import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const styles = {
        textDecoration : 'none'
    }
    const [showNav, setShowNav] = useState(false)
    const handleClick = () => {
        setShowNav(!showNav);
    }
    return ( 
        <nav>
            <div className='logo-icon'>    
                <Link to='/' className='nav-logo'><img src={Logo} alt=""/></Link>
                <FontAwesomeIcon className='iconBar' icon={faBars} onClick={handleClick} />
            </div>
            <Link to='/' style={styles} className={showNav?'nav-item ': 'nav-item show'} >Home</Link>
            <Link to='/rooms' style={styles} className={showNav?'nav-item ': 'nav-item show'}>Rooms</Link>
        </nav>
     );
}
 
export default Navbar;