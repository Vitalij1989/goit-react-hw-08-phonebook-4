import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  gap: 20px;
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  max-height: 500px;
  border: 2px solid #333;
  border-radius: 8px;
  height: 100%;
  padding: 0 15px;
  margin: 20px 0;
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const ContactsTitle = styled.h2`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 32px;
`;

export const ContactsListBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
