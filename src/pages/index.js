/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import Layout from '/components/layout'
import { Message } from 'theme-ui'



const IndexPage = () => {
  return (
    <Layout pageTitle="Hello! I'm Mel">
      <Message sx={{ fontWeight: 'bold'}}>A front end developer and UX designer.</Message>
      </Layout>
  )
}

export default IndexPage