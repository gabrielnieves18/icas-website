/**
 * Profile
 *
 * Created by gaby on 7/3/17.
 *
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { makeSelectLocale } from '../LanguageProvider/selectors';

import {
  makeSelectAvatar,
  makeSelectIsMobile,
  makeSelectScreenDimentions,
  makeSelectLoading,
  makeSelectUser,
} from '../App/selectors';

import {
  makeSelectCurrentSection,
} from './selectors';

import {
  updateCurrentSection,
} from './actions';

import {
  startLoading,
  stopLoading,
  updateAvatar,
} from '../App/actions';

import { PROFILE_SECTIONS } from './constants';
import { ROUTES } from '../../constants';

import AboutMeForm from '../Forms/AboutMeForm';
import AccountForm from '../Forms/AccountForm';
import Body from './Body';
import ContactForm from '../Forms/ContactForm';
import ProfileDrawer from './ProfileDrawer';
import LoadingLogo from '../../components/LoadingLogo';
import messages from './messages';
import PackageMenuWrapper from './PackageMenuWrapper';
import TitleDiv from './TitleDiv';
import Wrapper from './Wrapper';


class Profile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.props.stopLoading();
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const {
      avatar,
      appLoading,
      currentSection,
      isMobile,
      router,
      screenDimen,
      user,
    } = this.props;

    const styles = {
      appBar: {
        background: '#00a680',
        position: 'absolute',
        left: '0px',
        top: '0px',
      },
      badge: {
        badgeStyle: {
          top: 16,
          right: 16,
          zIndex: '500',
        },
        style: {
          position: 'fixed',
          right: `${isMobile ? '0px' : '16px'}`,
          bottom: `${isMobile ? '16px' : '32px'}`,
        },
      },
      navItem: {
        fontStyle: { color: 'black' },
        iconStyle: { color: '' },
      },
      navItemSelected: {
        fontColorStyle: { color: 'white' },
        iconStyle: { color: '' },
      },
      msgDiv: {
        color: 'rgb(96, 101, 104)',
        height: '16px',
        paddingLeft: '32px',
        textAlign: 'start',
        width: '100%',
      },
      packageCollection: {
        border: 'solid',
        margin: '16px',
        padding: '16px',
      },
      underscoreDiv: {
        borderBottom: '1px solid rgb(210, 210, 210)',
        padding: '0 25%',
      },
      titleSpan: {
        fontSize: '42px',
        fontFamily: 'Helvetica Neue, Arial, sans-serif',
        fontWeight: 'lighter',
        padding: '16px',
      },
    };

    console.log('Profile user', user);

    return (
      <Wrapper>
        <Helmet
          title="Spotter Dashboard Home"
          meta={[
            { name: 'description', content: 'Spotin Spotter Dashboard Home Page' },
          ]}
        />
        {
          appLoading ? (
            <div style={{ marginTop: '25%', marginBottom: '25%' }}>
              <LoadingLogo />
            </div>
          ) : (
            <div>
              {
                // Only display navBar if being displayed on a mobile device
                // Use static navigation drawer If Desktop is displayed on a desktop
                isMobile ? (
                  <AppBar
                    title="ICAS v0.0.1"
                    style={styles.appBar}
                    onLeftIconButtonTouchTap={() => this.handleToggle()}
                  />
                 ) : null
              }
              <ProfileDrawer
                avatar={avatar}
                currentSection={currentSection}
                isMobile={isMobile}
                open={this.state.open}
                setOpen={this.setState}
                smallScreen={screenDimen.get('height') < 750}
                updateAvatar={this.props.updateAvatar}
                updateCurrentSection={this.props.updateCurrentSection}
              />
              <Body>
                <TitleDiv>
                  <span style={styles.titleSpan} >
                    {
                      (
                        currentSection === PROFILE_SECTIONS.about_me) && (
                        <FormattedMessage {...messages.aboutMeTitleLabel} />
                      ) || (
                        <FormattedMessage {...messages.accountTitleLabel} />
                      )
                    }
                  </span>
                  <div style={styles.underscoreDiv} />
                </TitleDiv>
                <PackageMenuWrapper>
                  {
                    (
                      currentSection === PROFILE_SECTIONS.account) && (
                      <FormattedMessage {...messages.exitLabel}>
                        {
                          (formattedMSG) => (
                            <AccountForm
                              locale={this.props.locale}
                              onSubmit={() => router.push(ROUTES.HOME)}
                              submitButtonTitle={formattedMSG}
                            />
                          )
                        }
                      </FormattedMessage>
                    ) || (
                      <FormattedMessage {...messages.nextPageLabel} >
                        {
                          (formattedMSG) => (
                            <AboutMeForm
                              locale={this.props.locale}
                              onSubmit={() => this.props.updateCurrentSection(PROFILE_SECTIONS.account)}
                              submitButtonTitle={formattedMSG}
                              user={user}
                            />
                          )
                        }
                      </FormattedMessage>
                    )

                  }
                </PackageMenuWrapper>
              </Body>
            </div>
          )
        }
      </Wrapper>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.object,
  appLoading: PropTypes.bool,
  currentSection: PropTypes.number,
  initLoadData: PropTypes.func,
  isMobile: PropTypes.bool,
  locale: PropTypes.string,
  stopLoading: PropTypes.func,
  updateAvatar: PropTypes.func,
  updateCurrentSection: PropTypes.func,
  screenDimen: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  avatar: makeSelectAvatar(),
  appLoading: makeSelectLoading(),
  currentSection: makeSelectCurrentSection(),
  locale: makeSelectLocale(),
  isMobile: makeSelectIsMobile(),
  screenDimen: makeSelectScreenDimentions(),
  user: makeSelectUser(),
});

export function mapDispatchToProps(dispatch) {
  return {
    stopLoading: () => {
      dispatch(stopLoading());
    },
    updateAvatar: (url, data) => {
      dispatch(updateAvatar(url, data));
    },
    updateCurrentSection: (section) => {
      dispatch(updateCurrentSection(section));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
