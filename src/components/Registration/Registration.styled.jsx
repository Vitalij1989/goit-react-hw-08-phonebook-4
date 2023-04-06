import styled from 'styled-components';

export const RegistrFormWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const RegistrFormTitle = styled.h2`
  display: block;
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
`;

export const RegistrForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormButton = styled.button`
  width: 128px;
  height: 56px;
  background: #fff;
  color: #07345a;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.9;
  border: 2px solid #07345a;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
    background-color: #ffff01;
    border: 2px solid rgba(0, 0, 0, 0);
    color: #ff0101;
  }
`;
