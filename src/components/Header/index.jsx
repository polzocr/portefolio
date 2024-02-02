import './index.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header> 
            <div className="header">
                <div className="header-logo">
                    <span>P</span>
                    <span>w</span>
                </div>
                <nav className="header-nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'header-nav-link link-active' : 'header-nav-link'}>Accueil</NavLink>
                    <NavLink to="/cv" className={({ isActive }) => isActive ? 'header-nav-link link-active' : 'header-nav-link'}>CV</NavLink>
                </nav>
            </div>
        </header>
    )
}