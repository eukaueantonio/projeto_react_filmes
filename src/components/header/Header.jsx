import "./Header.css"
import Logo from "../../assents/img/logo.svg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link, redireciona para a tela login */}
                <Link to="/">
                    <img src={Logo} alt="Logo do filmoteca" />
                </Link>
                <nav className="nav_header">
                    <Link className="link_header" to="/Filme">Filme</Link>
                    <Link className="link_header" to="/Genero">Genero</Link>
                </nav>
            </div>
        </header>
    )
}


export default Header;