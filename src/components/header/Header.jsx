import React from 'react'
import { useRef, useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/logo.png';

const headerNav = [
    {
        display: 'Home',
        section: 'home',
        path: '/'
    },
    {
        display: 'Movies',
        section: 'movie',
        path: '/movie'
    },
    {
        display: 'TV Series',
        section: 'tv',
        path: '/tv'
    },

];

const Header = () => {

    // const { pathname } = useLocation();

    const headerRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = headerNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    // const activeIndex = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">

                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                        <span>M</span>ovies
                    </Link>
                </div>

                <ul className="header__nav">
                    {
                        headerNav.map((nav, index) => {
                            return (
                                <li key={index} className={`${index === activeIndex ? 'active' : ''}`}>
                                    <Link to={nav.path}>
                                        {nav.display}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <ul className="header__nav__left">
                    <li className="header__nav__item">
                        <Link to="/login" onClick={window.scrollTo(0, 0)}>
                            <i className="bx bx-user"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Header