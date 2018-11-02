import styled from 'styled-components'
import {
  justifyContent,
  justifyItems,
  alignItems,
  flexWrap,
  order,
  space,
  alignSelf,
  justifySelf,
  breakpoints,
  mediaQuery,
} from '../style'
import { CleanTag } from './CleanTag'

function getWidth(value) {
  if (value == null) {
    return null
  }

  if (!Number.isNaN(Number(value))) {
    return `${(100 / 12) * Number(value)}%`
  }

  return value
}

export const Grid = styled(CleanTag)(
  {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: `${40 / 15.2}vw`,
    paddingLeft: `${40 / 15.2}vw`,
  },
  space,
  alignItems,
  flexWrap,
  justifyItems,
  justifyContent,
)

Grid.displayName = 'Grid'

export const Column = styled(CleanTag)(
  props => ({
    width: getWidth(props.width) || '100%',
    paddingRight: `${16 / 15.2}vw`,
    paddingLeft: `${16 / 15.2}vw`,
    [mediaQuery(breakpoints.medium)]: {
      width: getWidth(props.tablet),
    },
    [mediaQuery(breakpoints.large)]: {
      width: getWidth(props.desktop),
    },
  }),
  space,
  order,
  alignSelf,
  justifySelf,
)
