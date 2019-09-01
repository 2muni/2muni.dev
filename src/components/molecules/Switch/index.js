import React from 'react'
import styled from 'styled-components'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

const Label = styled.label`
  font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    sans-serif;
  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    box-shadow: 0 0 5px 5px ${props => props.theme.colors.highlight};
  }
  .react-toggle--focus .react-toggle-thumb {
    box-shadow: 0 0 2px 3px ${props => props.theme.colors.highlight};
  }
  .react-toggle > .react-toggle-track,
  .react-toggle--checked > .react-toggle-track {
    background-color: black !important;
    &:hover {
      background-color: black !important;
    }
  }
  .react-toggle-thumb {
    border-color: transparent !important;
    outline: none !important;
    &:focus {
      outline: none;
    }
  }
  .react-toggle-track {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    span {
      font-size: 0.8em;
    }
  }
`

const Switch = props => {
  return (
    <Label>
      <Toggle {...props} />
    </Label>
  )
}

export default Switch
