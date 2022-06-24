import Logo from "../../assets/logo/logo-horizontal.png";
import iconOne from "../../assets/icons/icon1.png";
import iconTwo from "../../assets/icons/icon2.png";
import iconThree from "../../assets/icons/icon3.png";
import iconFour from "../../assets/icons/icon4.png";
import InputSearch from "../../assets/icons/input-search.png"
import "./style.css";

export default function Header() {
    return (
        <header>
          <nav>
              <div id="logo">
                <a href="#">
                  <img src={Logo} alt="logo da empresa" />
                </a>
              </div>
              <div className="search-input">
                <i>
                  <img src={InputSearch}></img>
                </i>
                <input
                  type="search"
                  placeholder="search here for your product"
                ></input>
              </div>
              <div className="nav-icons">
                <ul>
                  <li>
                    <a href="#">
                      <img src={iconOne}></img>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={iconTwo}></img>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={iconThree}></img>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={iconFour}></img>
                    </a>
                  </li>
                </ul>
              </div>
          </nav>
    
        </header>
    );
}
