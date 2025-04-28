import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';

export default function Header() {
    const location = useLocation(); // Get the current route

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Function to collapse mobile menu
    const handleNavLinkClick = () => {
        const mobileMenu = document.getElementById('mobile-menu-2');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    };

    // Check if the current path matches the Franchise routes
    const isFranchiseActive =
        location.pathname === '/unit-franchise' ||
        location.pathname === '/master-franchise';

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white">
                <div className="container mx-auto px-4 lg:px-6 py-1">
                    <div className="flex flex-wrap justify-between items-center">
                        <Link to="/" className="flex items-center">
                            <img src={assets.logo} className="mr-3 h-24" alt="Logo" />
                        </Link>
                        {/* Hamburger Button */}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-20 h-20 text-sm text-black rounded-lg lg:hidden focus:outline-none"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                            onClick={() => {
                                document
                                    .getElementById('mobile-menu-2')
                                    .classList.toggle('hidden');
                            }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-10 h-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                        {/* Navigation Links */}
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto transition"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 transition-all">
                                <li className="nav-list">
                                    <NavLink
                                        to="/"
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? 'text-pink-700'
                                                    : 'text-black'
                                            } hover:text-pink-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-list">
                                    <NavLink
                                        to="/about"
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? 'text-pink-700'
                                                    : 'text-black'
                                            } hover:text-pink-700 lg:p-0`
                                        }
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-list">
                                    <NavLink
                                        to="/contact"
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? 'text-pink-700'
                                                    : 'text-black'
                                            } hover:text-pink-700 lg:p-0`
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-list">
                                    <NavLink
                                        to="/blog"
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? 'text-pink-700'
                                                    : 'text-black'
                                            } hover:text-pink-700 lg:p-0`
                                        }
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                {/* 
                                <li>
                                    <NavLink
                                        to="https://ashaivfgurgaon.com/services/"
                                        target='_blank'
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? '#b20062'
                                                    : 'text-black'
                                            } hover:#b20062 lg:p-0`
                                        }
                                    >
                                        Services
                                    </NavLink>
                                </li> */}

                                {/* Dropdown Menu */}
                                {/* <li className="nav-list relative group">
                                    <button
                                        className={`py-2 pr-4 pl-3 duration-200 flex items-center lg:p-0 ${
                                            isFranchiseActive
                                                ? '#b20062'
                                                : 'text-black'
                                        } hover:#b20062`}
                                    >
                                        Franchise

                                        <svg
                                            className="w-4 h-4 ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    <ul className="absolute z-50 hidden w-full bg-yellow-400 shadow-lg overflow-hidden right-0 lg:w-60 lg:left-0 group-hover:block">
                                        <li>
                                            <Link
                                                to="/unit-franchise"
                                                onClick={handleNavLinkClick}
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Unit Franchise
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/master-franchise"
                                                onClick={handleNavLinkClick}
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Master Franchise
                                            </Link>
                                        </li>
                                    </ul>
                                </li> */}

                                {/* <li>
                                    <NavLink
                                        to="https://ashaivfgurgaon.com/blogs/"
                                        target='_blank'
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? '#b20062'
                                                    : 'text-black'
                                            } hover:#b20062 lg:p-0`
                                        }
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="https://ashaivfgurgaon.com/testimonials/"
                                        target='_blank'
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? '#b20062'
                                                    : 'text-black'
                                            } hover:#b20062 lg:p-0`
                                        }
                                    >
                                        Testimonials
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="https://ashaivfgurgaon.com/gallery/"
                                        target='_blank'
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? '#b20062'
                                                    : 'text-black'
                                            } hover:#b20062 lg:p-0`
                                        }
                                    >
                                        Gallery
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="https://ashaivfgurgaon.com/locations/"
                                        target='_blank'
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? '#b20062'
                                                    : 'text-blank'
                                            } hover:#b20062 lg:p-0`
                                        }
                                    >
                                        Locations
                                    </NavLink>
                                </li> */}
                                {/* <li>
                                    <NavLink
                                        to="/storelocator"
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? '#b20062'
                                                    : 'text-black'
                                            } hover:#b20062 lg:p-0`
                                        }
                                    >
                                        Store Locator
                                    </NavLink>
                                </li> */}
                                <li>
                                    <NavLink
                                        to="tel:9990720270"
                                        onClick={handleNavLinkClick}
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive
                                                    ? ''
                                                    : 'bg-pink-700'
                                            } hover:#b20062 lg:p-2 lg:px-6 p-2 px-6 text-md text-center text-white`
                                        }
                                    >
                                        9990 720 270
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

