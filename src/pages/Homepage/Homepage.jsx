import { Container } from '@mui/joy';
import {
  HomepageBlock,
  HomepageImage,
  HomepageText,
  HomepageTextBlock,
  HomepageTitle,
  HomepageWrap,
} from './Homepage.styled';
import HomeImage from 'images/book.png';

export const Homepage = () => {
  return (
    <>
      <Container>
        <HomepageWrap>
          <HomepageTextBlock>
            <HomepageTitle>
              This is a cool utility to create your own phone book.
            </HomepageTitle>

            <HomepageText>
              An application for creating, storing and deleting personal
              contacts as needed. Convenient and easy to use.
            </HomepageText>
          </HomepageTextBlock>
          <HomepageBlock>
            <HomepageImage
              src={HomeImage}
              alt="Phonebook"
              width="400"
              height="350"
            />
          </HomepageBlock>
        </HomepageWrap>
      </Container>
    </>
  );
};
