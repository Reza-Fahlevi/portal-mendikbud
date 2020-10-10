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

const ImageContainer = styled.div`
  border-radius: 8px;
  height: 240px;
  width: 90%;
`

const Image = styled.img`
  border-radius: 8px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

const Title = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 25px;
  font-weight: 700;
  margin-top: 8px !important;
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
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`

const Project = ({ data, size }) => (
  <>
    <ContainerHeader id="project">
      {/* <TitleHeader>TERPOPULER</TitleHeader> */}
      {/* <SeeMore
        size={size}
        href="https://github.com/RandyWardhana"
        target="_blank"
        rel="noopener noreferer"
      >
        See More on Github
      </SeeMore> */}
    </ContainerHeader>

    
    <ContainerContent>
      <Content size={size}>
        <ImageContainer>
          <Image src={'/images/school.png'} />
        </ImageContainer>
        <Title>SEKOLAH KITA</Title>
        <Truncate>
          <Description>Sekolah Kita menyajikan informasi tentang profil individu sekolah. <a href="http://sekolah.data.kemdikbud.go.id/" target="_blank">Selengkapnya...</a></Description>
        </Truncate>
      </Content>

      <Content size={size}>
        <ImageContainer>
          <Image src={'/images/book.png'} />
        </ImageContainer>
        <Title>JENDELA PENDIDIKAN</Title>
        <Truncate>
          <Description>Jendela Pendidikan menyediakan informasi tentang profil pendidikan dan kebudayaan. <a href="http://jendela.data.kemdikbud.go.id/" target="_blank">Selengkapnya...</a></Description>
        </Truncate>
      </Content>
    </ContainerContent>
    
    {/* <ContainerContent>
      <Content size={size}>
        <ImageContainer>
          <Image src={'/images/profil_pendidikan.png'} />
        </ImageContainer>
        <Title>Profil Pendidikan</Title>
        <Truncate>
          <Description>Menyediakan profil yang berkaitan tentang informasi pendidikan dan kebudayaan dalam ruang lingkup kabupaten/kota/provinsi/nasional.</Description>
        </Truncate>
      </Content>

      <Content size={size}>
        <ImageContainer>
          <Image src={'/images/publikasi_pendidikan.png'} />
        </ImageContainer>
        <Title>Publikasi Pendidikan</Title>
        <Truncate>
          <Description>Publikasi menyediakan produk-produk statistik dan kajian analisis berupa buku elektronik yang dapat diunduh.</Description>
        </Truncate>
      </Content>

      <Content size={size}>
        <ImageContainer>
          <Image src={'/images/informasi_basis_spasial.png'} />
        </ImageContainer>
        <Title>Informasi Basis Spasial</Title>
        <Truncate>
          <Description>Spasial menyajikan informasi tentang capaian indikator-indikator makro pendidikan di tingkat Sekolah, Kabupaten/Kota/Provinsi dan Nasional ditinjau dari perspektif Spasial/Ruang/Geografi.</Description>
        </Truncate>
      </Content>

      <Content size={size}>
        <ImageContainer>
          <Image src={'/images/statistik_pendidikan.png'} />
        </ImageContainer>
        <Title>Statistik Pendidikan</Title>
        <Truncate>
          <Description>Statistik menyajikan statistik pendidikan dalam wujud profil atau potret pendidikan pada tingkat Satuan Pendidikan, Kabupaten/Kota, Provinsi dan Nasional.</Description>
        </Truncate>
      </Content> */}

      {/* {data.map((item, index) => {
        return (
          <Content key={index} size={size} index={index} onClick={() => window.open(item.url)}>
            <ImageContainer>
              <Image alt={item.title} src={item.image} />
            </ImageContainer>
            <Title>{item.title}</Title>
            <Truncate>
              <Description>{item.description}</Description>
            </Truncate>
          </Content>
        )
      })} */}

      {/* <SeeMore
        size={size}
        href="https://github.com/RandyWardhana"
        target="_blank"
        rel="noopener noreferer"
        style={{ display: size.width < 425 ? 'inline-block' : 'none' }}
      >
        See More on Github
      </SeeMore>
    </ContainerContent> */}
  </>
)

export default Project