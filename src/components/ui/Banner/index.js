import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import BackgroundVideo from './BackgroundVideo'

import * as Styled from './styles';

const Banner = ({ title, subtitle, content, linkTo, linkText }) => (
  <Styled.Banner>
    <Container>
      <BackgroundVideo />
      <Styled.BannerContent>
        <TitleSection title={title} subtitle={subtitle} bannerTitle heroSubTitle heroSeparator />
        <Styled.Content>{content}</Styled.Content>
        <Link to={linkTo}>
          <Button primary>{linkText}</Button>
        </Link>
      </Styled.BannerContent>
    </Container>
  </Styled.Banner>
);

Banner.propTypes = {
  video: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default Banner;
