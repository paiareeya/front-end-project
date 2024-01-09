
import React from 'react';
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    return (
        <div className='from-navbar'>
            <p className='text-white'>gfdgdfg</p>
            <div className='flex gap-5 w-80 justify-center'>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? 'navbar-home active-navbar-home' : 'navbar-home'
                }>
                    <p>หน้าหลัก</p>
                </NavLink>
                {/* <NavLink to='/description' className={({ isActive }) =>
                    isActive ? 'navbar-home active-navbar-home' : 'navbar-home'
                }>
                    <p>คำอธิบาย</p>
                </NavLink>
                <NavLink to='/gf' className={({ isActive }) =>
                    isActive ? 'navbar-home active-navbar-home' : 'navbar-home'
                }>
                    <p>หน้าหลัก</p>
                </NavLink> */}
            </div>
        </div>
    );
};

export default Navbar;