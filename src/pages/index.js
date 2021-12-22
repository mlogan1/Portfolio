import * as React from 'react'
import Layout from '/components/layout'
import Greeting from '/components/greeting'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Greeting name="Mel" />
      <Greeting name="Megan" />
      <Greeting name="Generosa" />
    </Layout>
  )
}

export default IndexPage