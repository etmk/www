import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import { colors, fontFamily, fluidRange, breakpoints, vw } from '../lib/style'

export const StyledLink = styled.a`
  border: none;
  padding: 0;
  margin: 0;
  font-size: ${props => props.fontSize || fluidRange({ min: 16, max: 20 })};
  font-family: ${fontFamily};
  font-weight: ${props => (props.thin ? 400 : 500)};
  text-decoration: underline;
  color: ${props => props.textColor || colors.blue};
  background: none;

  @media screen and ${breakpoints.medium} {
    font-size: ${vw(20)};
  }

  &[aria-current] {
    text-decoration: none;
  }
`

export default function Link({ to, asPath, ...props }) {
  if (to) {
    return (
      <NextLink href={to} as={asPath} passHref>
        <StyledLink {...props} />
      </NextLink>
    )
  }

  return <StyledLink {...props} />
}
