import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/mattbaltzer" rel="external" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/matthew-baltzer/"
          rel="external"
          target="_blank"
        >
          LinkedIn
        </Styled.Link>
        {/* <Styled.Link href="/" rel="noreferrer noopener" target="_blank">
          Behance
        </Styled.Link> */}
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
