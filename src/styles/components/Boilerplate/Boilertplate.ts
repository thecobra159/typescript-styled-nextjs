import styled from 'styled-components'
import { Theme } from '../../Theme'

export const BoilerplateWrapper = styled.div`
  align-items: center;
  background-color: ${Theme.Blue};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

export const BoilerplateTitle = styled.h1`
  color: ${Theme.White};
  width: max-content;
`
