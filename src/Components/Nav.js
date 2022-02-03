import "../Nav.scss"
import { FaAtlassian } from "react-icons/fa";


const Nav = () => {
    return(
        <nav>
            < FaAtlassian className="hola" />
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Magazine</li>
            </ul>
        </nav>
    )
}

export default Nav