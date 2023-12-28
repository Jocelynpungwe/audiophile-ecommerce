import styled from 'styled-components'

const AppLogo = () => {
  return (
    <Wrapper>
      <span>audiophile</span>
    </Wrapper>
  )
}

const Wrapper = styled.h3`
  span {
    width: 143px;
    height: 25px;
    flex-shrink: 0;
    color: #fff;
  }
`

export default AppLogo
