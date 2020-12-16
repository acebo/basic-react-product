import React from 'react'

const Header = ({ children, className }) => {
  return (
    <div className={'app-header'}>
      <div className={`header-content ${ className }`}>
        { children }
      </div>
    </div>
  )
}

export default Header
