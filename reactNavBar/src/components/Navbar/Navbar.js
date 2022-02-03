import React from 'react'
import { Button } from '../Button'
import { MenuItems } from "./MenuItems"
import './Navbar.css'


class Navbar extends React.Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }



    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Logo<i className='fab fa-react'></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> {/* if clicked - true - show X, false - Hamburger */} 
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> {/* when clicked - active*/}
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                            <a className={item.cName} href={item.url}>{item.tittle}</a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign up</Button>
            </nav>
        )
    }
}

export default Navbar