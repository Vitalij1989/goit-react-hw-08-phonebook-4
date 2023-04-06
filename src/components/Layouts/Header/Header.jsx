import { useUser } from 'components/Hooks/useUser';
import { PAGE_NAMES } from 'components/Router/paths';
import { useState } from 'react';
import { useLogoutMutation } from 'redux/auth-operations';
import { useGetUserInfoQuery } from 'redux/auth-operations';
import { Container } from 'utils/Container';
import {
  Button,
  HeaderStyle,
  HeaderNav,
  LeftTabs,
  RightTabs,
  TabLink,
  NavButton,
  HeaderBlock,
  HeaderLogo,
  UserInfoWrap,
} from './Header.styled';
import avatar from 'images/avatar.png';

export const Header = () => {
  const [activeButton, setActiveButton] = useState('');
  const { isAuth, localLogOut } = useUser();
  const [logout] = useLogoutMutation();
  const userInfo = useGetUserInfoQuery();

  const handleButtonClick = event => {
    setActiveButton(event.target.dataset.action);
  };

  const handleTabLinkClick = () => {
    setActiveButton('');
  };

  const handleLogOutClick = async () => {
    await logout();
    localLogOut();
  };

  return (
    <>
      <HeaderStyle>
        <Container>
          <HeaderBlock>
            <HeaderLogo to={PAGE_NAMES.homepage}>Phonebook</HeaderLogo>
            <HeaderNav>
              <LeftTabs>
                <TabLink to={PAGE_NAMES.homepage} onClick={handleTabLinkClick}>
                  HomePage
                </TabLink>
                {isAuth && (
                  <TabLink
                    to={PAGE_NAMES.contacts}
                    onClick={handleTabLinkClick}
                  >
                    Contacts
                  </TabLink>
                )}
              </LeftTabs>
              <RightTabs>
                {!isAuth && (
                  <>
                    <NavButton to={PAGE_NAMES.login}>
                      <Button
                        isActive={activeButton === 'login'}
                        data-action="login"
                        onClick={handleButtonClick}
                      >
                        Log In
                      </Button>
                    </NavButton>
                    <NavButton to={PAGE_NAMES.register}>
                      <Button
                        isActive={activeButton === 'signup'}
                        data-action="signup"
                        onClick={handleButtonClick}
                      >
                        Sign Up
                      </Button>
                    </NavButton>
                  </>
                )}
                {isAuth && (
                  <UserInfoWrap>
                    {userInfo.isSuccess && (
                      <>
                        <img
                          src={avatar}
                          alt="Avatar icon"
                          width="35"
                          height="40"
                        />
                        <p>{userInfo.data.email}</p>
                      </>
                    )}
                    <NavButton to={PAGE_NAMES.homepage}>
                      <Button onClick={handleLogOutClick}>Log Out</Button>
                    </NavButton>
                  </UserInfoWrap>
                )}
              </RightTabs>
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </HeaderStyle>
    </>
  );
};
