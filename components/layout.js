/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Divider } from 'theme-ui'
import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'theme-ui'
import { NavLink } from 'theme-ui'
import { Flex } from 'theme-ui'
import { 
    container,

   } from '/components/layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>

      <nav>
      <Flex as="nav">
        <NavLink p={2}>
        <Link to="/"  activeClassName="active" sx={{ color: 'inherit', '&.active': { color: 'primary',}, }}>home</Link>
        </NavLink>
        <NavLink p={2}>
        <Link to="/projects" activeClassName="active" sx={{ color: 'inherit', '&.active': { color: 'primary',}, }}>projects</Link>
        </NavLink>
        <NavLink p={2}>
        <Link to="/social" activeClassName="active" sx={{ color: 'inherit', '&.active': { color: 'primary',}, }}>social</Link>
        </NavLink>
        <NavLink p={2}>
        <Link to="/blog" activeClassName="active" sx={{ color: 'inherit', '&.active': { color: 'primary',}, }}>blog</Link>
        </NavLink>
        <Button ml="auto" bg="primary"><Link to="/social" >resume</Link></Button>
      </Flex>
      </nav>
      
      <main>
        <h1 sx={{ fontSize: '72px'}}>{pageTitle}</h1>
        {children}
      </main>
      
      <footer>
        <p sx={{ paddingTop: '42px', fontSize: '13px', color: 'grey', marginBottom: '0px', paddingBottom: '0px'}}>This site was built with React, Gatsby, Contentful, GraphQL, and Theme UI.</p>
      </footer>
      <Divider sx={{ marginLeft: '0px'}}/>
    </div>
  )
}

export default Layout