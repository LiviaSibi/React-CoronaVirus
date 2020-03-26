import React from 'react';
import './Header.css';
import { Route, Link } from 'react-router-dom';
import Scroll from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';

const ScrollLink = Scroll.Link

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
                        <Link to='/home/'><h1 style={{fontSize: '2.0rem'}}><FontAwesomeIcon icon={faVirus}/> Coronavírus</h1></Link>
                        
                        <div  className="dropdown" style = {{width:"240px"}} >
                            <div className="button" onClick={this.showMenu}> Sobre o Vírus </div>
                            { this.state.displayMenu ? (
                                <ul>
                                    <li><ScrollLink 
                                        to="/home/introducao" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500} 
                                        className='Home' 
                                        activeClass='Home'
                                    > O que é? </ScrollLink></li>

                                    <li><ScrollLink 
                                        to="/home/transmissao" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500} 
                                        className='Home' 
                                        activeClass='Home'
                                    > Transmissão </ScrollLink></li>

                                    <li><ScrollLink 
                                        to="/home/prevencao" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500} 
                                        className='Home' 
                                        activeClass='Home'
                                    > Prevenção </ScrollLink></li>

                                    <li><ScrollLink 
                                        to="/home/sintomas" 
                                        spy={true} 
                                        smooth={true} 
                                        duration={500} 
                                        className='Home' 
                                        activeClass='Home'
                                    > Sintomas </ScrollLink></li>
                                </ul>
                            ) : ( null )
                            }
                        </div>
                        <div className="part2">
                            <ul className="ul" style={{position: 'absolute', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'}}>
                                <li className="li"><Link to='/faq'>Perguntas & Respostas</Link></li>
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
