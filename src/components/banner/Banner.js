import React, { useEffect } from "react";
import BannerCss from './Banner.css'
import Rocket from './../../assets/rocket.gif'
import M from "materialize-css"
import RocketImg from '../../assets/rocket.png'
function Banner(){
        useEffect(
            () => {
                M.AutoInit();
            },
            [],
        );
        return(
            <>
                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <h4>Video apresentação</h4>
                        <p>Diego fernandes</p>
                    </div>
                    <div className="container">
                        <div class="video-container">
                            <iframe width="853" height="480" src="//www.youtube.com/embed/S5Qvi23VqaQ" frameborder="0" allowfullscreen></iframe>
                        </div>  
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Acessar</a>
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Fechar</a>
                    </div>
                </div>
                <section className="jumbotron">
                    <div className="row">
                        <div className="container">
                            <div className="col s6">
                                <h1>Rocket Programming</h1>
                                <h2>Você quer continuar seu aprendizado em programação?</h2>
                                <a className="waves-effect waves-light btn modal-trigger red darken-1" href="#modal1">Começar agora!</a>
                            </div>
                            <div className="col s5 offset-s1">
                                <img className="responsive-img" src={RocketImg} />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

export default Banner;