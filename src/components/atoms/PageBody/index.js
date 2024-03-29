import React from 'react'
import styled from 'styled-components'
require('prismjs/themes/prism-tomorrow.css')

const Body = styled.div`
  height: 100%;
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.6;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.7em;
    &::before {
      content: '';
      border-left: 4px solid ${props => props.theme.colors.highlight};
      padding: 0 0 0 0.5rem;
    }
  }
  h2 {
    font-size: 1.3em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 1.6em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.highlight};
    &:hover {
      color: ${props => props.theme.colors.hlHover};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.6;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.6;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    padding: 1em;
    color: ${props => props.theme.colors.captionColor};
    background: ${props => props.theme.colors.base};
    margin: 0 0 2em 0;
    p {
      margin: 0;
    }
  }

  pre {
    border-radius: 0.3em;
  }

  /* Inline code */
  *:not(pre) > code {
    padding: 0.2em 0.4em 0.4em !important;
    background: ${props => props.theme.colors.secondary} !important;
    color: ${props => props.theme.colors.textColor};
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
