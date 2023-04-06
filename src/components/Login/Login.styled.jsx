import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginTitle = styled.h2`
  display: block;
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegistrButton = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-size: 17px;
  margin-top: 15px;
  color: #171515;
  transition: color 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: #f13737;
  }
`;


