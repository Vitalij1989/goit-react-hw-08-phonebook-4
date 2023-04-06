import { Box as JoyBox } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { Input } from '@mui/joy';
import { useState } from 'react';
import { FormButton } from 'components/Registration/Registration.styled';
import { useLoginMutation } from 'redux/auth-operations';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'components/Hooks/useUser';
import {
  LoginForm,
  LoginTitle,
  LoginWrap,
  RegistrButton,
} from './Login.styled';
import { PAGE_NAMES } from 'components/Router/paths';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const { logIn } = useUser();

  const submitHandler = async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    const result = await login({
      email: email.value,
      password: password.value,
    });

    if (result.error) {
      toast.error('The username or password is incorrect.');
    } else {
      toast.success('You have successfully logged on');
      logIn(result.data.token);
      navigate('/contacts');
      window.location.reload();
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <LoginWrap>
        <LoginForm onSubmit={submitHandler}>
          <LoginTitle>Log In</LoginTitle>

          <JoyBox
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '400px',
            }}
          >
            <Input
              startDecorator={<EmailIcon />}
              placeholder="Email"
              name="email"
            />
            <Input
              startDecorator={<KeyRoundedIcon />}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              endDecorator={
                <IconButton
                  color="neutral"
                  size="sm"
                  onClick={toggleShowPassword}
                >
                  <VisibilityRoundedIcon />
                </IconButton>
              }
            />
          </JoyBox>

          <FormButton type="submit">Log In</FormButton>
          <RegistrButton to={PAGE_NAMES.register}>
            Register an account here
          </RegistrButton>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </LoginForm>
      </LoginWrap>
    </>
  );
};
