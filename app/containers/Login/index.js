/**
 * Created by gaby on 6/22/17.
 */
// import _ from 'lodash';

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocale } from '../LanguageProvider/selectors';
import { FormattedMessage } from 'react-intl';

import AlertDiv from './AlertDiv';
import ActiveSpan from './ActiveSpan'
import Button from './Button';
import CenteredDiv from './CenteredDiv';
import SpotinIconLogo from '../../components/SpotinIconLogo';
import FacebookLogo from '../../components/FacebookLogo';
import GoogleLogo from '../../components/GoogleLogo';
import LocaleToggle from '../LocaleToggle';
import InactiveSpan from './InactiveSpan';
import LoadingLogo from '../../components/LoadingLogo';
import LogoWrapper from './LogoWrapper';
import LocaleWrapper from './LocaleWrapper';
import LocaleRow from './LocaleRow';
import LoginViewWrapper from './LoginViewWrapper';
import LoginForm from './LoginForm';
import messages from './messages';
import OAUTHSpanWrapper from './OAUTHSpanWrapper';
import RegisterForm from './RegisterForm';

import {
  loginUser,
  registerUser,
  registerAction,
  storeLoginAttempt,
} from './actions';

import {
  makeSelectAttempts,
  makeSelectLoginError,
  makeSelectRegisterError,
  makeSelectRegister,
  makeSelectUserLogged,
} from './selectors';

import {
  makeSelectLoading,
  makeSelectUser,
} from '../App/selectors';

import { ROUTES } from './../../constants';


class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static attempts = 0;

  componentDidMount() {
    if (this.props.loginSuccessful) {
      this.props.router.push(ROUTES.HOME);
    }
  }

  componentDidUpdate() {
    if (this.props.loginSuccessful) {
      this.props.router.push(ROUTES.HOME);
    }
  }

  render() {
    const {
      attempts,
      loginError,
      loginSuccessful,
      loading,
      locale,
      registerError,
      onLogin,
      onRegister,
      onSubmitLoginForm,
      onSubmitRegisterForm,
    } = this.props;

    LoginPage.attempts = this.props.attempts;

    return (
      <div>
        <Helmet
          title="Spotter Dashboard Login"
          meta={[
            { name: 'description', content: 'Spotin Spotter Dashboard Login Page' },
          ]}
        />
        <LogoWrapper>
          <SpotinIconLogo height={50} width={120} />
        </LogoWrapper>
        <CenteredDiv>
          <LoginViewWrapper>
            {
              loading ? (
                <div style={{ margin: '16px' }} >
                  <div style={{ marginRight: '16px' }}>
                    <LoadingLogo />
                  </div>
                  <OAUTHSpanWrapper>
                    <span style={{ fontSize: '14px', fontFamily: '"Open Sans"' }}>
                      Sit back and relax while we retrieve your profile.
                    </span>
                  </OAUTHSpanWrapper>
                </div>
              ) : (
                <div>
                  <div style={{ margin: '4% 0% 4% 4%' }}>
                    <FormattedMessage {...messages.loginLabel} >
                      {
                        (formatedMessage) => (
                          <Button onClick={() => onLogin()} >
                            {
                              this.props.register ? (
                                <InactiveSpan>{formatedMessage}</InactiveSpan>
                              ) : (
                                <ActiveSpan>{formatedMessage}</ActiveSpan>
                              )
                            }
                          </Button>
                        )
                      }
                    </FormattedMessage>
                    <FormattedMessage {...messages.registerLabel} >
                      {
                        (formatedMessage) => (
                          <Button onClick={() => onRegister()} >
                            {
                              this.props.register ? (
                                <ActiveSpan>{formatedMessage}</ActiveSpan>
                              ) : (
                                <InactiveSpan>{formatedMessage}</InactiveSpan>
                              )
                            }
                          </Button>
                        )
                      }
                    </FormattedMessage>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }} >
                    {
                      // Display the Login form by default. Display the
                      // register form only if the user click the Register tab.
                      this.props.register ? (
                        <RegisterForm onSubmit={onSubmitRegisterForm} locale={locale} />
                      ) : (
                        <LoginForm onSubmit={onSubmitLoginForm} locale={locale} />
                      )
                    }
                  </div>
                  <OAUTHSpanWrapper>
                    <div>
                      <FormattedMessage {...messages.authPrompLabel1} />
                      <br />
                      <FormattedMessage {...messages.authPrompLabel2} />
                        <div>
                          <Button style={{ padding: '18px 24px 12px 24px' }} onClick={() => window.alert('Auth with Facebook')}>
                            <FacebookLogo height={40} width={40} />
                          </Button>
                          <Button style={{ padding: '18px 24px 12px 24px' }} onClick={() => window.alert('Auth with Google')}>
                            <GoogleLogo height={40} width={40} />
                          </Button>
                        </div>
                    </div>
                  </OAUTHSpanWrapper>
                </div>
              )
            }
          </LoginViewWrapper>
        </CenteredDiv>
        {
          // Display the error in an alert component if the server detects
          // either a login error or a registration error.
          (
            loginError.get('email').get('error') && <AlertDiv />
          ) || (
            registerError.get('firstName').get('error') && <AlertDiv />
          )
        }
        <LocaleWrapper>
          <LocaleRow>
            <LocaleToggle />
          </LocaleRow>
        </LocaleWrapper>
      </div>
    );
  }
}

LoginPage.propTypes = {
  attempts: PropTypes.number,
  loginError: PropTypes.object,
  registerError: PropTypes.object,
  loginSuccessful: PropTypes.bool,
  loading: PropTypes.bool,
  onRegister: PropTypes.func,
  onLogin: PropTypes.func,
  register: PropTypes.bool,
  router: PropTypes.object,
  onSubmitLoginForm: PropTypes.func,
  onSubmitRegisterForm: PropTypes.func,
  userData: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => {
      dispatch(registerAction(false));
    },
    onRegister: () => {
      // User click the register tab
      dispatch(registerAction(true));
    },
    onSubmitLoginForm: (evt) => {
      // User click the login tab
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loginUser());
      dispatch(storeLoginAttempt(LoginPage.attempts + 1));
    },
    onSubmitRegisterForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(registerUser());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  attempts: makeSelectAttempts(),
  userData: makeSelectUser(),
  loginError: makeSelectLoginError(),
  loginSuccessful: makeSelectUserLogged(),
  loading: makeSelectLoading(),
  locale: makeSelectLocale(),
  registerError: makeSelectRegisterError(),
  register: makeSelectRegister(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
