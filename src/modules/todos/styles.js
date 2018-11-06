import styled from 'styled-components'
import { media } from '../../core/media'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );

  ${media.tablet`
    padding-left: 10%;
    padding-right: 10%;
  `} ${media.desktop`
    padding-left: 30%;
    padding-right: 30%;
  `};
`

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`
