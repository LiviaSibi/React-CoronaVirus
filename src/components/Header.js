import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';

const hashLinkList = [
  {
    id:'/home#introducao',
    text: ' O que é? '
  },
  {
    id:'/home#transmissao',
    text: ' Transmissão '
  },
  {
    id:'/home#prevencao',
    text: ' Prevenção '
  },
  {
    id:'/home#sintomas',
    text: ' Sintomas '
  }
]
const linkList = [
  {
    id:'/faq',
    text: 'Perguntas & Respostas'
  },
  {
    id:'/quiz',
    text: 'O que fazer?'
  }
]

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
                  {hashLinkList.map((el) => <li key={el.id}><HashLink to={el.id}>{el.text}</HashLink></li>)}
                  {linkList.map((el) => <li className="mobile" key={el.id}><Link to={el.id}>{el.text}</Link></li>)}
                </ul>
              ) : ( null )
              }
            </div>
            <div className="nav-continuation">
              <ul style={{position: 'absolute', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'}}>
                {linkList.map((el) => <li key={el.id}><Link to={el.id}>{el.text}</Link></li>)}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
