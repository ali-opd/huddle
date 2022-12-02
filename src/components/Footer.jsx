import SocialIcons from './SocialIcons';

import { Container } from './styles/Container.styles';
import { Flex } from './styles/Flex.styles';
import { StyledFooter } from './styles/Footer.styles';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="footer image" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
              maxime!
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
