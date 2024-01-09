import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
// import Navbar from '../component/Navbar'

export default class LayoutNavbar extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Outlet />
            </>
        )
    }
}

