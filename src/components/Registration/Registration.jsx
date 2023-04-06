import { Box as JoyBox } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { Input } from '@mui/joy';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRegistrationMutation } from 'redux/auth-operations';
import {
  FormButton,
  RegistrForm,
  RegistrFormTitle,
  RegistrFormWrap,
} from './Registration.styled';
import { RegistrButton } from 'components/Login/Login.styled';
import { PAGE_NAMES } from 'components/Router/paths';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registration] = useRegistrationMutation();

  const submitHandler = async e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;

    const result = await registration({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    if (result.error) {
      toast.error(
        'Incorrect data input. Check that all fields are filled correctly or email is already registered.'
      );
    } else {
      toast.success('Registration completed successfully');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <RegistrFormWrap>
        <RegistrForm onSubmit={submitHandler}>
          <RegistrFormTitle>Registration</RegistrFormTitle>
          <JoyBox
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '400px',
            }}
          >
            <Input
              startDecorator={<PeopleIcon />}
              name="name"
              placeholder="Name"
              pattern="/^[A-Za-z]+$/i"
              required
            />
            <Input
              startDecorator={<EmailIcon />}
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
            <Input
              startDecorator={<KeyRoundedIcon />}
              name="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/"
              required
              endDecorator={
                <IconButton
                  color="neutral"
                  size="sm"
                  onClick={toggleShowPassword}
                >
                  <VisibilityRoundedIcon />
                </IconButton>
              }
              title="Password should be at least 8 characters"
            />
          </JoyBox>
          <FormButton type="submit" onSubmit={submitHandler}>
            Registration
          </FormButton>
          <RegistrButton to={PAGE_NAMES.login}>
            Already Have an account? Sign In
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
        </RegistrForm>
      </RegistrFormWrap>
    </>
  );
};
