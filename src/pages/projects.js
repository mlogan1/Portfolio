// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '/components/layout'
import { Message } from 'theme-ui'

// Step 2: Define your component
const Projects = () => {
  return (
    <Layout pageTitle="Projects">
      <Message sx={{ fontWeight: 'bold'}}>This is sample project text.</Message>
    </Layout>
  )
}

// Step 3: Export your component
export default Projects