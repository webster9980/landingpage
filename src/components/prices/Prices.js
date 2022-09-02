import React,{useEffect} from "react";
import PricesCSS from './Prices.css'
import M from "materialize-css"

export default function Prices(){
        useEffect(
            () => {
                M.AutoInit();
            },
            [],
        );
        return(
            <>  
                <div id="modal2" class="modal">
                    <div class="modal-content">
                        <h4>Preencha seus dados:</h4>
                        <form >
                            <label name="email">Email:</label>
                            <input type="email" />
                            <label name="senha">Senha:</label>
                            <input type="password" />
                            <label name="repetir-senha">repetir senha:</label>
                            <input type="password" />                        
                        </form>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cadastrar</a>
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
                    </div>
                </div>                         
                <section class="plans-price pad-section" id="planos"> 
                    <div class="container">
                        <div class="row">
                            <div class="col s12">
                                <h2 class="pad-section">
                                    Planos e preços
                                </h2>
                            </div>
                            <div class="col s4 margin-top-section">
                                <div class="card">
                                    <div class="card-image">
                                        <div class="card-title blue darken-4">Free</div>
                                        <div class="prices">
                                            <sup>$ 0/month</sup>
                                        </div>
                                    </div>
                                    <div class="card-content">
                                        <ul class="collection">
                                            <li class="collection-item">
                                                <i class="material-icons">done</i>
                                                Video aulas
                                            </li>
                                            <li class="collection-item">
                                                <i class="material-icons">done</i>
                                                Fórum online
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="card-action center-align">
                                        <a href="#modal2" className="modal-trigger">Acess</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col s4 margin-top-section">
                                <div class="card">
                                    <div class="card-image">
                                        <div class="card-title  blue darken-4">Ignite</div>
                                        <div class="prices">
                                            <sup>$150,00/month</sup>
                                        </div>
                                    </div>
                                    <div class="card-content">
                                        <ul class="collection">
                                            <li class="collection-item">
                                                <i class="material-icons">done</i>
                                                Todas as video aulas
                                            </li>
                                            <li class="collection-item">
                                                <i class="material-icons">done</i>
                                                Fórum com os Professores
                                            </li>
                                            <li class="collection-item">
                                                <i class="material-icons">done</i>
                                                Conteúdos exclusivos
                                            </li> 
                                        </ul>
                                    </div>
                                    <div class="card-action center-align">
                                        <a href="#modal2" className="modal-trigger">Acess</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col s4 margin-top-section">
                                <div class="card">
                                    <div class="card-image">
                                        <div class="card-title  blue darken-4">GoStack</div>
                                        <div class="prices">
                                            <sup>$300,00/month</sup>
                                        </div>
                                    </div>
                                    <div class="card-content">
                                        <ul class="collection">
                                        <li class="collection-item">
                                                <i class="material-icons">done</i>
                                                Todas as video aulas
                                            </li>
                                            <li class="collection-item">
                                                <i class="material-icons">done</i>
                                                Fórum com os Professores
                                            </li>
                                            <li class="collection-item">
                                                <i class="material-icons">done</i>
                                                Conteúdos exclusivos
                                            </li> 
                                            <li class="collection-item">
                                                <i class="material-icons">done</i>
                                                Acesso vitalício
                                            </li> 
                                        </ul>
                                    </div>
                                    <div class="card-action center-align">
                                        <a href="#modal2" className="modal-trigger">Acess</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
}


