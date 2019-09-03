import React from 'react'
import styled from 'styled-components'
import Container from '../../atoms/Container'
import BgImg from '../../atoms/BgImg'

const Wrapper = styled(Container)`
  position: relative;
  min-height: 300px;
  height: auto;
`
const Img = styled(BgImg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
`

const Hero = ({ fluid }) => (
  <Wrapper>
    <Img fluid={fluid} backgroundColor={'#eeeeee'} />
  </Wrapper>
)

export default Hero
