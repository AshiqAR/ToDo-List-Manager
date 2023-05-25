import React from 'react'

const Footer = () => {
    let footerStyle = {
        width: "100%",
        position: 'absolute',
        bottom: 0
    }
    return (
        <footer className='bg-dark text-light' style={footerStyle}>
            <p className="textcenter">
                Copyright &copy; MyTodsList.com
            </p>
        </footer>
    )
}

export default Footer
