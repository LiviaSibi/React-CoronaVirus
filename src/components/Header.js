import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
            <Link to='/home'><h1 style={{fontSize: '2.0rem'}}><FontAwesomeIcon icon={faVirus}/> Coronavírus</h1></Link>
            
            <div  className="dropdown" >
              <div className="button" onClick={this.showMenu}> Sobre o Vírus </div>
              { this.state.displayMenu ? (
                <ul>
                  <li><HashLink to='/home#introducao'> O que é? </HashLink></li>
                  <li><HashLink to='/home#transmissao'> Transmissão </HashLink></li>
                  <li><HashLink to='/home#prevencao'> Prevenção </HashLink></li>
                  <li><HashLink to='/home#sintomas'> Sintomas </HashLink></li>
                  <li className="mobile"><Link to='/faq'>Perguntas & Respostas</Link></li>
                  <li className="mobile"><Link to='/quiz'>O que fazer?</Link></li>
                </ul>
              ) : ( null )
              }
            </div>
            <div className="nav-continuation">
              <ul style={{position: 'absolute', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'}}>
                <li><Link to='/faq'>Perguntas & Respostas</Link></li>
                <li><Link to='/quiz'>O que fazer?</Link></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
