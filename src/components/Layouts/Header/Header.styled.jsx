import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  background: rgb(7, 52, 90);
  color: #fff;
  height: 80px;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled(NavLink)`
  text-decoration: none;
  color: #ffff01;
  margin-right: 40px;
  font-weight: 800;
  font-size: 36px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const LeftTabs = styled.div`
  display: flex;
  align-items: center;
`;
export const TabLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.9;
  transition: color 0.3s ease-in-out;
  &:not(:last-child) {
    margin-right: 40px;
  }
  &.active {
    border-bottom: 2px solid #fff;
    padding-bottom: 6px;
    margin-bottom: -6px;
    color: #ffff01;
  }
  &:hover,
  &:focus {
    color: #ff0101;
  }
`;

export const RightTabs = styled.div`
  display: flex;
  align-items: center;
`;
export const NavButton = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const Button = styled.button`
  padding: 15px;
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #07345a;
  border-radius: 5px;
  color: ${props => (props.isActive ? '#07345a' : '#ffff01')};

  border-radius: 8px;

  text-decoration: none;

  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
`;

export const UserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
