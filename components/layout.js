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

      
      <header
  sx={{
    display: 'flex',
    alignItems: 'center',
    variant: 'styles.header',
  }}>
  <Link
    to="/"
    activeClassName="active"
    sx={{
      variant: 'styles.navlink',
      p: 2,
      textDecoration: 'none',
      color: 'inherit', 
      '&.active': { color: 'primary',fontWeight: 'bold', textDecoration: 'underline'}
    }}>
    Home
  </Link>  
  <Link
    to="/projects"
    activeClassName="active"
    sx={{
      variant: 'styles.navlink',
      p: 2,
      textDecoration: 'none',
      color: 'inherit', 
      '&.active': { color: 'primary',fontWeight: 'bold',textDecoration: 'underline'}
    }}>
    Projects
  </Link>
  <Link
    to="/social"
    activeClassName="active"
    sx={{
      variant: 'styles.navlink',
      p: 2,
      textDecoration: 'none',
      color: 'inherit', 
      '&.active': { color: 'primary', fontWeight: 'bold',textDecoration: 'underline'}
    }}>
    Social
  </Link>  <Link
    to="/blog"
    activeClassName="active"
    sx={{
      variant: 'styles.navlink',
      p: 2,
      textDecoration: 'none',
      color: 'inherit', 
      '&.active': { color: 'primary',fontWeight: 'bold',textDecoration: 'underline'}
    }}>
    Blog
  </Link>
  <div sx={{ mx: 'auto' }} />


  <Button ml="auto" bg="primary"><Link to="/social" sx={{color: 'white', textDecoration: 'none'}}>Resume</Link></Button>
</header>
    
      <main>
        <h1 sx={{ fontSize: '72px', letterSpacing: '-0.03em'}}>{pageTitle}</h1>
        {children}
      </main>
      
      <footer>
        <p sx={{ paddingTop: '48px', fontSize: '13px', color: 'grey', marginBottom: '0px', paddingBottom: '0px'}}>This site was built with React, Gatsby, Contentful, GraphQL, and Theme UI.</p>
        
      </footer>
      <Divider sx={{ marginLeft: '0px'}}/>
    </div>
  )
}

export default Layout