import React, {Component} from "react";
export default function Header(){
        return(
            <>
                <header>
                    <nav className="red darken-1" id="inicio">
                        <div class="nav-wrapper">
                            <a href="#" class="brand-logo">Logo</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#tecnologias">Tecnologias</a></li>
                                <li><a href="#planos">Planos</a></li>
                                <li><a href="#contatos">Contato</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </>

        );
}

