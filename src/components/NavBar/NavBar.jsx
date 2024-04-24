import CartWidget from './CartWidget'
import './navbar.scss'
import rocaLogo from "../../assets/img/logo.png"

const NavBar = () => {
    return (
        <nav id="navbar">
            <div className="nav">
                <div className="logo">
                    <img src={ rocaLogo } alt="" />
                </div>
                <ul>
                    <li>
                        Home                   
                    </li>
                    <li>
                        Stacey
                    </li>
                    <li>
                        Ryan
                    </li>
                    <li>
                        Joshua
                    </li>
                    <li>
                        Marvin
                    </li>
                    <li>
                        Rocks
                    </li>
                    <li>
                        Rockies
                    </li>
                </ul>
            </div>            

            <CartWidget />
        </nav>
    )
}

export default NavBar