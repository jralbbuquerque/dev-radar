import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

/** Conceitos do React
 * Componentes: são funções que retornam HTML
 * Propriedade: Informações que um componente PAI passa para o componente filho
 * Estado: Informações mantidas pelo componente (Lembrar: Imutabilidade)
 */

function App() {
    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div class="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input name="github_username" id="github_username" required />
                    </div>

                    <div class="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required />
                    </div>

                    <div className="input-group">
                        <div class="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude" required />   
                        </div>

                        <div class="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude" required />   
                        </div>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </aside>
            
            <main>
                <ul>
                    <li className="dev-item">
                        <header>
                            <img src="https://avatars3.githubusercontent.com/u/12306444?s=460&u=bd0ca2864f66e6f1fd5cb4cd17de57487f2069a7&v=4" alt="Francisco Junior"/>
                            <div className="user-info">
                                <strong>Francisco Júnior</strong>
                                <span>Python, ReactJS e React Native</span>
                            </div>
                        </header>
                        <p>Ph.D. student of applied computing. A Pythonist passionate about data science applied to solving real-world problems.</p>
                        <a href="https://github.com/jralbbuquerque">Acessa perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars3.githubusercontent.com/u/12306444?s=460&u=bd0ca2864f66e6f1fd5cb4cd17de57487f2069a7&v=4" alt="Francisco Junior"/>
                            <div className="user-info">
                                <strong>Francisco Júnior</strong>
                                <span>Python, ReactJS e React Native</span>
                            </div>
                        </header>
                        <p>Ph.D. student of applied computing. A Pythonist passionate about data science applied to solving real-world problems.</p>
                        <a href="https://github.com/jralbbuquerque">Acessa perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars3.githubusercontent.com/u/12306444?s=460&u=bd0ca2864f66e6f1fd5cb4cd17de57487f2069a7&v=4" alt="Francisco Junior"/>
                            <div className="user-info">
                                <strong>Francisco Júnior</strong>
                                <span>Python, ReactJS e React Native</span>
                            </div>
                        </header>
                        <p>Ph.D. student of applied computing. A Pythonist passionate about data science applied to solving real-world problems.</p>
                        <a href="https://github.com/jralbbuquerque">Acessa perfil no Github</a>
                    </li>

                    <li className="dev-item">
                        <header>
                            <img src="https://avatars3.githubusercontent.com/u/12306444?s=460&u=bd0ca2864f66e6f1fd5cb4cd17de57487f2069a7&v=4" alt="Francisco Junior"/>
                            <div className="user-info">
                                <strong>Francisco Júnior</strong>
                                <span>Python, ReactJS e React Native</span>
                            </div>
                        </header>
                        <p>Ph.D. student of applied computing. A Pythonist passionate about data science applied to solving real-world problems.</p>
                        <a href="https://github.com/jralbbuquerque">Acessa perfil no Github</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;