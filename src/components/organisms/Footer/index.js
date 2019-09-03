import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import Link from '../../atoms/Link'
import Caption from '../../atoms/Caption'
import config from '../../../utils/siteConfig'

const Wrapper = styled.footer`
  text-align: center;
  font-size: 90%;
`
const Content = styled(Container)`
  padding: 1.3125rem 0;
`
const Text = styled(Caption)`
  display: inline;
  color: ${props => props.theme.colors.captionColor};
`

const Footer = () => (
  <Wrapper>
    <Content>
      <Text>{'©'}</Text>
      <Link external href="https://github.com/2muni">
        {config.author}
      </Link>
      <Text>{`, powered by `}</Text>
      <Link external href="https://www.contentful.com/">
        Contentful
      </Link>
    </Content>
  </Wrapper>
)

export default Footer
