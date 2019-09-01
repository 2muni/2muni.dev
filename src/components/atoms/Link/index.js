import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const styles = css`
  color: ${props => props.theme.colors.highlight};
  text-decoration: none;
`
const Internal = styled(Link)`
  ${styles}
`
const External = styled.a`
  ${styles}
  &:visited,
  &:active {
    color: ${props => props.theme.colors.highlight};
  }
`

const Wrapper = ({ children, external, ...other }) =>
  external ? (
    <External {...other} rel="nofollow noopener noreferrer" target="_blank">
      {children}
    </External>
  ) : (
    <Internal {...other}>{children}</Internal>
  )

export default Wrapper
