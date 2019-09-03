import styled from 'styled-components'
import Img from 'gatsby-image'

const bgImg = styled(Img)`
  & > img {
    object-fit: cover !important;
    object-position: 50% 50% !important;
  }
`

export default bgImg
