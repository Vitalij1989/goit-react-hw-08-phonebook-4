import styled from 'styled-components';

export const ContactsForm = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
  gap: 30px;
  
`;

export const ContactFormLabel = styled.label`
  font-size: 16px;
  line-height: 1.67;
  letter-spacing: 0.01em;
  font-family: 'Times New Roman', Times, serif;
  color: #757575;
  display: block;
`;

export const ContactFormBtn = styled.button`
  text-transform: uppercase;

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
  &:focus,
  &:hover {
    background-color: #ffff01;
    border: 2px solid rgba(0, 0, 0, 0);
    color: #ff0101;
    
  }
`;
