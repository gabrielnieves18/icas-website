/**
 * Created by gaby on 7/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import messages from './messages';

const Legal = ({ style }) => (
  <div style={style}>
    <div style={{ margin: '12px 0 16px 0', padding: '0 16px' }}>
      <div style={{ marginBottom: '14px' }} >
        <FormattedMessage {...messages.legalTermsLabel} >
          {
            (formattedMSG) => (<Link href="" target="none" onlyActiveOnIndex={false} >{formattedMSG}</Link>)
          }
        </FormattedMessage>
      </div>
      <FormattedMessage {...messages.legalPrivacyLabel} >
        {
          (formattedMSG) => (<Link href="" target="none" onlyActiveOnIndex={false} >{formattedMSG}</Link>)
        }
      </FormattedMessage>
    </div>
  </div>
);

Legal.propTypes = {
  style: PropTypes.object,
};

export default Legal;
