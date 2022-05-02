import React, {useState} from "react";

function Nav({ currentPage, pageChange }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>

            <header className="p-5 navbar is-transparent">
                <div className="navbar-brand">
                    <a href="/" className="mx-2 mt-4 title is-2 titleColor"
                        onClick={() => pageChange('Home')}>
                        Mikayla Howitz
                    </a>
                    <div onClick={() => { setIsActive(!isActive)}} className={`navbar-burger   burger ${isActive ? "is-active navbar-end" : ""}`} data-target="navbarMenuHeroA" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <nav className={`navbar-menu navbar-end is-size-4 ${isActive ? "is-active" : ""}`} id="navbarMenuHeroA">

                    <a href="#about" onClick={() => pageChange('About')}
                        className={currentPage === 'About' ? 'navbar-item is-active-custom mx-2' : 'navbar-item mx-2'}> About Me </a>


                    <a href="#projects"
                        onClick={() => pageChange('Projects')}
                        className={currentPage === 'Projects' ? 'navbar-item is-active-custom mx-2' : 'navbar-item mx-2'}>Projects</a>


                    <a href="#contact"
                        onClick={() => pageChange('Contact')}
                        className={currentPage === 'Contact' ? 'navbar-item is-active-custom mx-2' : 'navbar-item mx-2'}>Contact me</a>

                    <a href ="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:6c2a2a94-b8cb-3a85-840f-113d8e997cb9" rel="noreferrer" target="_blank" className="navbar-item mx-2">Open Resume</a>
                </nav>
            </header>
        </>

    )
}

export default Nav;