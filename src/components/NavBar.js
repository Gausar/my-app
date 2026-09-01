import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav} from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/gausar.png';
// import './App.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    // Highlight the nav link for whichever section is currently in view.
    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") return;

        const ids = ["home", "about", "skills", "Projects", "timeline", "hobbies"];
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(entry.target.id.toLowerCase());
                    }
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleClick = () => {
        navigate('/contact');
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#timeline" className={activeLink === 'timeline' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('timeline')}>Experience</Nav.Link>
                <Nav.Link href="#hobbies" className={activeLink === 'hobbies' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('hobbies')}>Hobbies</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/gausar-amangyeldi-17308b298/"><img src={navIcon1} alt="icon"/></a>
                    <a href="https://www.facebook.com/gausar.amangyeldi.9/"><img src={navIcon2} alt="icon"/></a>
                    <a href="https://www.instagram.com/a_gausar/"><img src={navIcon3} alt="icon"/></a>
                </div>
                <button className="vvd" onClick={handleClick}><span>Let's connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

// export default NavBar;