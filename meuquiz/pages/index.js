import styled from 'styled-components'
import db from '../db.json';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const backgroundImage = styled.div `
  flex: 1;
  background-size: cover;
  background-position: center;
`;
export default function Home() {
  return (
  <div style={{backgroundImage: `url(${db.bg})`}}>
      teste
  </div>
  )
}
