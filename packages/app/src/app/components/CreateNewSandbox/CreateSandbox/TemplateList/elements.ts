import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EditIcon = styled(Link)`
  transition: 0.3s ease color;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;

  &:hover,
  &:focus {
    outline: none;
    color: white;
  }
`;
