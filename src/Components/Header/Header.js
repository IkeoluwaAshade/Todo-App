import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='mainHeader'>
        <div className='headerHold'>
            <div className='logoDivs'>
                <h1>Todo App</h1>

                <div className='navDivs'>
                    <div className='Navigation'>
                        <span>How it Works</span>
                    </div>
                    
                    <div className='Navigation'>
                        <span>Contact Us</span>
                    </div>

                    <div className='Navigation'>
                        <span>Help</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header