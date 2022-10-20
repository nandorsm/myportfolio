import { Link } from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.navbar}>
                <h2>MyPortfolio</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
        </nav>
    )
}

export default Navbar