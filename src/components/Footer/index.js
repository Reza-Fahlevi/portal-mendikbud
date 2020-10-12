import React from 'react'
import styled, { css } from 'styled-components'

import { Heart } from '../Svg'

const ContainerHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 96px 0 0;
  color: white;
  background: #4a4a4a;
  
  ${(props) => props.size.width < 768 && css`
    margin: 16px 0 0;
  `}

  .body {
    background-color: #4a4a4a;
  }
`

const TitleHeader = styled.p`
  align-items: center;
  color: ${({ theme }) => theme.primary};
  display: flex;
  font-weight: 300;
  transition: ${({ theme }) => theme.transition}; 

  @media(max-width: 375px) {
    font-size: 14px;
  }

  @media(max-width: 320px) {
    font-size: 11.75px;
  }
`

const Author = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  margin: 0 4px;
  text-decoration: none;
`

const Footer = ({ size, theme }) => (
  <ContainerHeader size={size}>
    <TitleHeader>
      {/* Made with&ensp;<Heart size={size.width <= 375 ? 14 : 24} fill={theme.primary} />&ensp;by */}
      <Author
        href="https://www.kemdikbud.go.id/main/"
        target="_blank"
        rel="noopener noreferer"
      >
        Kementerian Pendidikan dan Kebudayaan
      </Author>
    </TitleHeader>
  </ContainerHeader>
)

export default Footer