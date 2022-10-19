import { Link } from 'react-router-dom'

import Container from './Container'

function Navbar() {
    return(
        <nav>
            <Container>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar