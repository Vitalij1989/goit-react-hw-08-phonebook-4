import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ErrorPageTitle = styled.h2`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 600;
  font-size: 36px;
  margin-top: 36px;
`;

export const ErrorPageNotFoundText = styled.h4`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
`;

export const ErrorPageText = styled.p`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
  text-align: center;
`;

export const ErrorPageButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.9;
  text-decoration: none;
  color: #07345a;
  cursor: pointer;
  padding: 15px;
  margin: 10px 0;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #07345a;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #ffff01;
    border: 2px solid rgba(0, 0, 0, 0);
    color: #ff0101;
  }
`;
