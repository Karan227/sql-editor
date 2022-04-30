import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
        <li className='nav-item'><span className='nav-link'>SQL Editor</span></li>
        <li className='nav-item'><a className="nav-link" href="https://github.com/Karan227/sql_editor">Github <i class="fa fa-github"></i></a></li>
        </ul>
    </nav>
  )
}

export default Navbar
