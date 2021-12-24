/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import Layout from '/components/layout'
import { Message } from 'theme-ui'
import { Paragraph } from 'theme-ui'



const IndexPage = () => {
  return (
    <Layout pageTitle="Hello! I'm Mel">
      <Message sx={{ fontWeight: 'bold'}}>A front end developer and UX designer.</Message>
      <Paragraph variant="block" sx={{ paddingTop: '10px'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc elit,
        feugiat ut velit eget, pellentesque accumsan libero. Duis interdum ante sed
        ipsum imperdiet congue nec non mauris. Quisque ac ultricies nunc. Sed nisi
        diam, suscipit eu laoreet a, bibendum nec mauris. Aliquam tristique rhoncus
        ipsum scelerisque egestas.
</Paragraph>
      </Layout>
  )
}

export default IndexPage