import { Link } from "react-router-dom"
import { GrCart } from "react-icons/gr";
import logourl from "./logo.jpeg"





const Header = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark" style={{borderRadius:'9px'}}>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li>
                                <img src={logourl} alt="logourl" width={90} height={"auto"}/>
                            </li>
                            <li class="nav-item">
                                <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>Home</Link>

                            </li>
                            <li class="nav-item" style={{marginLeft:120}}>
                                <Link to={"/Blog"} style={{ textDecoration: "none", color: "white" }}>Contact</Link>

                            </li>
                            <li class="nav-item" >
                                <Link to={"/About"} style={{ textDecoration: "none", color: "white" }}>About</Link>
                            </li>
                            <li class="nav-item dropdown" >
                                <Link to={"/cart"} style={{ textDecoration: "none", color: "white" }}><GrCart/>Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header