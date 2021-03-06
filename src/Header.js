import React from 'react';
import NavLink from './NavLink';


function Header(props) {
    return (<header className="h-25 border d-flex flex-column">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Dribbble</a>
            <ul className="navbar-nav mr-auto">
                <NavLink href="#" title={"Shots"}/>
                <NavLink href="#" title={"Designers"}/>
                <NavLink href="#" title={"Teams"}/>
                <NavLink href="#" title={"Communitys"}/>
                <NavLink href="#" title={"Jobs"}/>
                <NavLink href="#" title={"Hireing"}/>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign In</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
        </nav>
        <section className="flex-grow-1 text-white bg-black d-flex flex-column justify-content-center align-items-center">
            <p><span className="font-weight-bold">What are you working on?</span> Double Dribbble is where designers get inspired and hired</p>
            <button className="btn btn-sm btn-pink">
                Continue <i className="fa fa-long-arrow-right"></i>
            </button>
        </section>
        <section className="h-25 bg-dark text-white-50 d-flex justify-content-center align-items-center">
            <p>lookimg for a designer <u><a href="#" className="text-white "> Learn more </a></u></p>
        </section>
    </header>);

}

export default Header;