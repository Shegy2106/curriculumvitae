import '../assets/Header.css'
import '../assets/colors.css'
import { home, work_experience, education, projects, contact_me }  from '../assets/strings'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='nav'>
                <div>
                    <NavLink className='nav-el' to="/">{home}</NavLink>
                    <NavLink className='nav-el' to="/work-experience">{work_experience}</NavLink>
                    <NavLink className='nav-el' to="/education">{education}</NavLink>
                    <NavLink className='nav-el' to="/projects">{projects}</NavLink>
                    <NavLink className='nav-el' to="/contact-me">{contact_me}</NavLink>
                </div>
            </header>
        </>
    )
}

export default Header
