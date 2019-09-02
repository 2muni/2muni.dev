import React from 'react'
import styled from 'styled-components'
import Link from '../../atoms/Link'
import Caption from '../../atoms/Caption'
import config from '../../../utils/siteConfig'

const Wrapper = styled.footer`
  margin: 0 auto;
  padding-top: 1.3125rem;
  text-align: center;
  font-size: 90%;
  max-width: ${props => props.theme.sizes.maxWidth};
  box-shadow: inset 0 1px 0 ${props => props.theme.colors.secondary};
  transition: box-shadow 0.25s ease-out;
`
const Text = styled(Caption)`
  display: inline;
  color: ${props => props.theme.colors.captionColor};
`

const Footer = () => (
  <Wrapper>
    <Text>{'©'}</Text>
    <Link external href="https://github.com/2muni">
      {config.author}
    </Link>
    <Text>{`, powered by `}</Text>
    <Link external href="https://www.contentful.com/">
      Contentful
    </Link>
  </Wrapper>
)

export default Footer
