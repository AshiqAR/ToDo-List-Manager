import React from 'react'

const Footer = () => {
    const pStyle = {
        margin: '0px 0px',
    }
    let footerStyle = {
        position: 'fixed',
        bottom: '0px',
        width: "100%",
        height: '30px'
    }
    return (
        <footer className='bg-dark text-light' style={footerStyle}>
            <p className="textcenter" style={pStyle}>
                Copyright &copy; MyTodsList.com
            </p>
        </footer>
    )
}

export default Footer
