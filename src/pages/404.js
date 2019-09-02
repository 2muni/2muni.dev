import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../templates/commons/Layout'
import Emphasis from '../components/atoms/Emphasis'
import Container from '../components/atoms/Container'
import Link from '../components/atoms/Link'
import Badge from '../components/atoms/Badge'

const Wrapper = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled(Emphasis)`
  text-align: center;
`
const Text = styled.p`
  margin: 3em 0 4em;
  line-height: 1.6em;
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Wrapper centered>
      <Title>Page Not Found</Title>
      <Text>
        The page you were looking for doesn't seem to exist anymore...
      </Text>
      <Link to="/">
        <Badge emph>Back to 2muni.dev</Badge>
      </Link>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
