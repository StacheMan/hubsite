import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'

import * as Styled from './styles';

const TitleSection = ({ center, heroSeparator, heroSubTitle, bannerTitle, title, subtitle }) => (
  <Styled.TitleSection>
    {subtitle && <Styled.SubTitle className={cx({
      "hero-sub-title": heroSubTitle
    })} center={center}>{title}</Styled.SubTitle>}
    <Styled.Title className={cx({
      "banner-title": bannerTitle
    })} center={center}>{subtitle}</Styled.Title>
    <Styled.Separator className={cx({
      "hero-separator": heroSeparator
    })} center={center} />
  </Styled.TitleSection>
);

TitleSection.propTypes = {
  heroSeparator: PropTypes.bool,
  heroSubTitle: PropTypes.bool,
  bannerTitle: PropTypes.bool,
  center: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default TitleSection;
