import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: linear-gradient(25deg, #000000 5%, #1a2a6c 55%, #b21f1f 75%, #fdbb2d 100%);
  width: 100vw;
  height: 100vh;
  align-items: center;
  
  @media (min-width: ${({theme}) => theme.breakpoints.tablet}){
    flex-direction: row;
  }
`

export const BarbazulLink = styled.img`
  width: 75%;
  max-width: 340px;
  border-radius: 50%;
  transition: .3s;
  
  &:hover{
    cursor: pointer;
    border: 5px solid ${({theme}) => theme.colors.white};
    box-shadow: 7px 7px 17px ${({theme}) => theme.colors.white};
  }
  
  @media (min-width: ${({theme}) => theme.breakpoints.tablet}){
    width: 30vw;
    max-width: unset;
  }
`

export const LourdesLink = styled.img`
  width: 75%;
  max-width: 340px;
  border-radius: 50%;
  transition: .3s;
  
  &:hover{
    cursor: pointer;
    border: 5px solid ${({theme}) => theme.colors.black};
    box-shadow: -7px 7px 17px ${({theme}) => theme.colors.black};
  }
  
  @media (min-width: ${({theme}) => theme.breakpoints.tablet}){
    width: 30vw;
    max-width: unset;
  }
`
