/**
 * Created by gaby on 6/22/17.
 */
import React from 'react';

import { FormattedMessage } from 'react-intl';

import A from './A';
import CopyrightDiv from './CopyrightDiv';
import CopyrightSpan from './CopyrightSpan';
import FacebookIcon from './facebook-icon';
import InstagramIcon from './instagram-icon';
import LocaleToggle from '../../containers/LocaleToggle';
import LocaleToggleWrapper from './LocaleToggleWrapper';
import messages from './messages';
import SpotinIconMarker from '../../components/SpotinIconMarker';
import SnapchatIcon from './snapchat-icon';
import Wrapper from './Wrapper';

function Footer() {
  const fbURL = 'https://www.facebook.com/spotinpr';
  const instURL = 'https://www.instagram.com/spotinpr';
  const scURL = 'https://docs.wixstatic.com/ugd/4e83a5_716f7f5a7e0a45fab40da1e3c77b7905.pdf';
  const termsURL = 'https://www.spotin.io/terms';
  const privacyURL = 'https://www.spotin.io/privacy-policy';

  const iconWith = 22;
  const iconHeight = 22;

  return (
    <Wrapper>
      <CopyrightDiv>
        <Row>
          <Col className="pb-2" xs="12" sm="6">
            <a href="https://www.spotin.io" target="none">
              <SpotinIconMarker width={iconWith} height={iconHeight} />
            </a>
            <CopyrightSpan>
              <FormattedMessage
                {...messages.copyrights}
                values={{ copyrightIcon: <span>&copy;</span> }}
              />
            </CopyrightSpan>
          </Col>
          <Col className="text-center" xs="12" sm="6">
            <A href={fbURL} target="none">
              <FacebookIcon width={iconWith} height={iconHeight} />
            </A>
            <A href={instURL} target="none">
              <InstagramIcon width={iconWith} height={iconHeight} />
            </A>
            <A href={scURL} target="none">
              <SnapchatIcon width={iconWith} height={iconHeight} />
            </A>
            <A href={termsURL} target="none">
              <FormattedMessage {...messages.terms} />
            </A>
            <A href={privacyURL} target="none">
              <FormattedMessage {...messages.privacy} />
            </A>
          </Col>
        </Row>
        <LocaleToggleWrapper>
          <LocaleToggle dropup />
        </LocaleToggleWrapper>
      </CopyrightDiv>
    </Wrapper>
  );
}

export default Footer;
