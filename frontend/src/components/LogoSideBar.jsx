import React from 'react'
import Logo from '../assets/react.svg'
import './styles/LogoSideBar.css'

function LogoSideBar() {
    return (
        <>
            <div className="logo">
                <div className='logo-icon'>
                    <img src={Logo} alt="logo-react" />
                </div>
            </div>
        </>
    )
}

export default LogoSideBar