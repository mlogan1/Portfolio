import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    title,
    navList,
    navLinkItem,
    navLinkText
 } from '/components/layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navList}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={title}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout