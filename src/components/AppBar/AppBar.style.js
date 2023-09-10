import styled from 'styled-components';
import { borderColor, bgColor } from '../../assets/stylesVariables';

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 0 20px;
  border-bottom: 1px solid ${borderColor};
  background: ${bgColor};

  @media (min-width: 750px) {
    padding: 0 80px;
  }
`;
