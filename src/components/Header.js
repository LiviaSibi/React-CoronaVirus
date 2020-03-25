import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component{

    constructor() {
        super();
        
        this.state = {
            displayMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render(){
        return (
            <div className="Header">
                <header>

                    <nav className="nav">
                        <h1><FontAwesomeIcon icon={faVirus}/> Coronavírus</h1>
                        <div  className="dropdown" style = {{width:"240px"}} >
                            <div className="button" onClick={this.showMenu}> Sobre o Vírus </div>
                            { this.state.displayMenu ? (
                                <ul>
                                    <li><a className="active" href="#introducao">Oque é?</a></li>
                                    <li><a href="#transmissao">Transmissão</a></li>
                                    <li><a href="#prevencao">Prevenção</a></li>
                                    <li><a href="#sintomas">Sintomas</a></li>
                                </ul>
                            ) : ( null )
                            }
                        </div>
                        <div className="part2">
                            <ul className="ul" style={{position: 'absolute', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'}}>
                                <li className="li"><a href="#">FAQ</a></li>
                                <li className="li"><a href="#">Oque fazer?</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;
