import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../templates/commons/Layout'
import Emphasis from '../components/atoms/Emphasis'
import Container from '../components/atoms/Container'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: #121212;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Container>
      <Emphasis>Page Not Found</Emphasis>
      <Text>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </Text>
    </Container>
  </Layout>
)

export default NotFoundPage
