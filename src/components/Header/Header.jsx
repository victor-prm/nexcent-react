import './header.sass'
import logo from '../../assets/Logo.svg'
import HeaderLink from './HeaderLink'



function Header() {
    let links = [
        {
            text: "Home",
            href: "#"
        },
        {
            text: "Product",
            href: "#"
        },
        {
            text: "FAQ",
            href: "#"
        }
    ]

    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt="" />
            <nav className='header__nav'>
                {links.map((link,index) => (<HeaderLink key={index} data={link} />))}
            </nav>
            <div className='header__btn-wrapper'>
                <button className='header__btn'>Login</button>
                <button className='header__btn btn-primary'>Sign Up</button>
            </div>
        </header>
    )
}



export default Header