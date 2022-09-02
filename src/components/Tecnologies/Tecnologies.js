import React, { useEffect } from "react";
import TecnologiesCSS from './Tecnologies.css'
import ImagemJavascript from './../../assets/ic-javascript.jpg'
import ImagemHtml from './../../assets/ic-html.jpg'
import ImagemCSS from './../../assets/ic-css.jpg'
import ImagemReact from './../../assets/ic-react.jpg'
import ImagemGit from './../../assets/ic-git.jpg'
import M from "materialize-css"

export default function Tecnologies(){
        useEffect(
            () => {
                M.AutoInit();
            },
            [],
        );
        return(
            <>
                <div className="container" id="tecnologias">
                    <div className="row">
                        <div className="col s8">
                            <h1>Tecnologias aprendidas no curso</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s6">
                            <div class="card">
                                <div class="card-image">
                                    <img src={ImagemJavascript} />
                                    <span class="card-title">javascript</span>
                                </div>
                                <div class="card-content">
                                    <p>
                                        I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.
                                    </p>
                                </div>
                                <div class="card-action">
                                    <a href="modal3">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s6">
                            <div class="card">
                                <div class="card-image">
                                    <img src={ImagemHtml} />
                                    <span class="card-title">HTML5</span>
                                </div>
                                <div class="card-content">
                                    <p>
                                        I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.
                                    </p>
                                </div>
                                <div class="card-action">
                                    <a href="modal3">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s6">
                            <div class="card">
                                <div class="card-image">
                                    <img src={ImagemCSS} />
                                    <span class="card-title">CSS 3</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="modal3">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s6">
                            <div class="card">
                                <div class="card-image">
                                    <img src={ImagemReact} />
                                    <span class="card-title">ReactJS</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="modal3">This is a link</a>
                                </div>
                            </div>
                        </div>
                        <div class="col s6">
                            <div class="card">
                                <div class="card-image">
                                    <img src={ImagemGit} />
                                    <span class="card-title">Git</span>
                                </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="modal3">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <h1>Video aulas completas</h1>
                    </div>
                    <div className="container">
                        <div class="video-container">
                            <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </>
        );
}


