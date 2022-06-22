import logo from "../../assets/icons/logo.png"
import Link from "../Link"

import "./styles.css";

function Header() {
    return (
    <header>
        <nav>
            <ul>
                <li>
                    <img src={logo} alt="logo da empresa"/>
                </li>
                <li>
                    <Link text="Home" redirect="/home"/>
                </li>
                <li>
                    <Link text="Marketplace" redirect="/marketplace"/>
                </li>
                <li>
                    <Link text="Contact" redirect="/contact"/>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;
