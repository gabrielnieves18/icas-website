/*
 *
 * LanguageToggle
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import DropDownButton from '../../components/DropDownButton';
import messages from './messages';

import { changeLocale } from '../LanguageProvider/actions';
import { LOCALE_i18n_MAP } from '../../i18n';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export class LocaleToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      currentLocaleValue: LOCALE_i18n_MAP.english.value,
    };
  }

  onChange(evt, index, value) {
    this.props.onLocaleToggle(value);
  }

  render() {
    const { locale } = this.props;

    return (
      <div>
        <FormattedMessage {...messages.list_header} >
          {
            (formatedMessage) =>(
              <DropDownButton value={locale} onChange={ (evt, index, val) => this.onChange(evt, index, val) }>
                <MenuItem disabled  primaryText={formatedMessage} />
                {
                  Object.keys(LOCALE_i18n_MAP).map((key, index) => {
                    const locale = LOCALE_i18n_MAP[key];
                    return (<MenuItem key={index} value={locale.value} primaryText={locale.description} />);
                  })
                }
              </DropDownButton>
            )
          }
        </FormattedMessage>
      </div>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (value) => dispatch(changeLocale(value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
