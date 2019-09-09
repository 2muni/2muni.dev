import React from 'react'
import styled from 'styled-components'
import Avatar from '../../atoms/Avatar'
import Link from '../../atoms/Link'
import Caption from '../../atoms/Caption'
import List from '../../atoms/List'
import Container from '../../atoms/Container'
import avatar from '../../../images/avatar.png'
import config from '../../../utils/siteConfig'

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  margin: 1.3125rem auto;
`
const Text = styled.div`
  margin-left: 1em;
  flex: 1;
`
const Description = styled(Caption)`
  color: ${props => props.theme.colors.captionColor};
`

const Bio = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Avatar src={avatar} />
      <Text>
        <Caption>
          {'Written by '}
          <Link external href="https://github.com/2muni">{`@${config.author}`}</Link>
        </Caption>
        <Description>{config.authorDescription}</Description>
        <Caption>
          <List>
            <li>
              <Link external href="https://github.com/2muni">
                GitHub
              </Link>
            </li>
            {/* <li>
                <Link external href="#">
                  Qiita
                </Link>
              </li> */}
          </List>
        </Caption>
      </Text>
    </Wrapper>
  )
}

export default Bio
