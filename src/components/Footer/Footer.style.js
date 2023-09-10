import { motion } from 'framer-motion';
import styled from 'styled-components';
//import { BsHeartFill } from 'react-icons/bs';
import { secondaryColor, bgColor } from '../../assets/stylesVariables';

export const Wrapper = styled.footer`
  padding: 20px 0;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${bgColor};
`;

export const Copy = styled.div`
  display: flex;
  align-items: center;
  color: ${secondaryColor};
`;

export const Heart = styled(motion.div)`
  margin: 0 15px;
`;
// export const ColoredSplitHeartIcon = styled(BsHeartFill)`
//   background: linear-gradient(to bottom, blue 50%, yellow 50%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;
// `;