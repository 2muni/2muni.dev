import styled from 'styled-components'
import Img from 'gatsby-image'

const Hero = styled(Img)`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  min-height: 300px;
  height: auto;
  @media (min-width: ${props => props.theme.responsive.small}) {
    height: 50vh;
  }
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

export default Hero
