import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const ContainerHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  transition: ${({ theme }) => theme.transition}; 
`

const TitleHeader = styled.h1`
  color: ${({ theme }) => theme.primary};
  transition: ${({ theme }) => theme.transition};
`

const SeeMore = styled.a`
  color: ${({ theme }) => theme.secondary};
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-right: 16px;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  ${(props) => props.size.width < 425 && `
    display: none
  `}
`

const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Content = styled.div`
  cursor: pointer;
  padding-bottom: 32px;
  width: 48%;

  ${(props) => props.index == 0 ? `
    margin-left: 0;
  ` : `
    margin-left: ${props.index % 2 !== 0 ? '16px !important' : 0};
  `}

  ${(props) => props.size.width < 768 && `
    width: 100% !important;
    margin: 0 !important;
  `}
`

const ContentBig = styled.div`
  cursor: pointer;
  padding-bottom: 32px;
  width: 100%;
//   height: 50%;

  ${(props) => props.index == 0 ? `
    margin-left: 0;
  ` : `
    margin-left: ${props.index % 2 !== 0 ? '-20px !important' : 0};
  `}

  ${(props) => props.size.width < 768 && `
    width: 100% !important;
    margin: 0 !important;
  `}
`

const ImageContainer = styled.div`
  border-radius: 8px;
  height: 176px;
  width: 100%;
`

const ImageContainerBig = styled.div`
  border-radius: 8px;
  height: 200px;
  width: 100%;
`

const Image = styled.img`
  border-radius: 8px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`
const ChartImage = styled.img`
  border-radius: 8px;
  height: 150%;
  object-fit: cover;
  width: 100%;
`

const Title = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px !important;
  margin-block-end: 0;
  margin-block-start: 0;
  transition: ${({ theme }) => theme.transition};
`

const ChartTitle = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  font-weight: 500;
  margin-top: 100px !important;
  margin-block-end: 0;
  margin-block-start: 0;
  transition: ${({ theme }) => theme.transition};
`

const Truncate = styled.div`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin: 0 0 1em 0;
  overflow: hidden;
`

const Description = styled(Title)`
  color: ${({ theme }) => theme.secondary};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`

const Chart = ({ data, size }) => (
  <>
    <ContainerHeader id="chart">
      <TitleHeader>GRAFIK</TitleHeader>
    </ContainerHeader>
    
    <ContainerContent>
      <Content size={size}>
        <ImageContainer>
          <ChartImage src={'/images/jumlah_satuan_pendidikan.png'} />
        </ImageContainer>
        <ChartTitle>Jumlah Satuan Pendidkan</ChartTitle>
        {/* <Truncate>
          <Description>Menyediakan profil yang berkaitan tentang informasi pendidikan dan kebudayaan dalam ruang lingkup kabupaten/kota/provinsi/nasional.</Description>
        </Truncate> */}
      </Content>

      <Content size={size}>
        <ImageContainer>
          <ChartImage src={'/images/persentase_pendidik.png'} />
        </ImageContainer>
        <ChartTitle>Persentase Pendidik</ChartTitle>
        {/* <Truncate>
          <Description>Publikasi menyediakan produk-produk statistik dan kajian analisis berupa buku elektronik yang dapat diunduh.</Description>
        </Truncate> */}
      </Content>

    </ContainerContent>
    
    <ContainerHeader id="chart">
      <TitleHeader>JUMLAH PESERTA DIDIK</TitleHeader>
    </ContainerHeader>
    <ContainerContent>
    <ContentBig size={size}>
        <ImageContainerBig>
          <ChartImage src={'/images/jumlah_peserta_didik.png'} />
        </ImageContainerBig>
        <ChartTitle></ChartTitle>
        {/* <Truncate>
          <Description>Menyediakan profil yang berkaitan tentang informasi pendidikan dan kebudayaan dalam ruang lingkup kabupaten/kota/provinsi/nasional.</Description>
        </Truncate> */}
      </ContentBig>
    </ContainerContent>

  </>
)

export default Chart