import React from "react";
import './menu.css';
function Header(props){
    return(
       <div className="header">
        <div className="logo">
            <img src="https://imgs.search.brave.com/7aR5iHo-jq-9PbG6_TvjSdH7nP4rNIw62wAfNSGEWpQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzExL0NvcmludGhp/YW5zLWxvZ28tZXNj/dWRvLnBuZw" className="imgLogo"></img>
        </div>
        <div className="opcoes">
            <nav>
                <ul className="opcoesLista">
                    <li><a>Home</a></li>
                    <li><a>Opções</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
        </div>
       </div>
    )
}
export default Header;