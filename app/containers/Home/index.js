/**
 * HomePage
 *
 * Created by gaby on 7/3/17.
 *
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import SVGMail from 'material-ui/svg-icons/content/mail';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import {
  makeSelectAvatar,
  makeSelectIsMobile,
  makeSelectLoading,
  makeSelectOpenChat,
  makeSelectScreenDimentions,
} from '../App/selectors';

import {
  makeSelectCurrentSection,
  makeSelectCurrentObjectData,
  makeSelectOngoingPackages,
  makeSelectUncompletedPackages,
} from './selectors';

import {
  loadPreviousPage,
  loadNextPage,
  updateCurrentSection,
} from './actions';

import {
  closeChat,
  openChat,
  startLoading,
  stopLoading,
  updateAvatar,
} from '../App/actions';

import { HOME_SECTIONS } from './constants';
import { ROUTES } from '../../constants';

import Body from './Body';
import Button from './Button';
import ChatNotReadyModal from '../../components/ChatNotReadyModal';
import HomeDrawer from './HomeDrawer';
import LoadingLogo from '../../components/LoadingLogo';
import messages from './messages';
import PackageMenuWrapper from './PackageMenuWrapper';
import SectionDiv from './SectionDiv';
import WelcomeDiv from './WelcomeDiv';
import Wrapper from './Wrapper';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    this.props.stopLoading();
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const {
      avatar,
      appLoading,
      closeHomeChat,
      currentSection,
      isMobile,
      isChatOpen,
      openHomeChat,
      ongoingPackages,
      router,
      screenDimen,
      uncompletedPackages,
      updateAvatar,
    } = this.props;

    const styles = {
      appBar: {
        background: '#00a680',
        position: 'absolute',
        left: '0px',
        top: '0px'
      },
      badge: {
        badgeStyle: {
          top: 16,
          right: 16,
          zIndex: '500'
        },
        style: {
          position: 'fixed',
          right: `${ isMobile ? '0px' : '16px' }`,
          bottom: `${ isMobile ? '16px' : '32px' }`
        }
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
        padding: '16px'
      },
      underscoreDiv: {
        borderBottom: '1px solid rgb(210, 210, 210)',
        padding: '0 25%'
      },
      welcomeSpan: {
        fontSize: '42px',
        fontFamily: 'Helvetica Neue, Arial, sans-serif',
        fontWeight: 'lighter',
        padding: '16px'
      },
    };

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
                     title="Spotin"
                     style={styles.appBar}
                     onLeftIconButtonTouchTap={ (evt) => this.handleToggle() }
                   />
                 ) : null
              }
              <HomeDrawer
                avatar={avatar}
                currentSection={ currentSection }
                isMobile={isMobile}
                open={this.state.open}
                setOpen={this.setState.bind(this)}
                smallScreen={screenDimen.get('height') < 750}
                updateAvatar={updateAvatar}
                updateCurrentSection={this.props.updateCurrentSection}
              />
              <Body>
                <WelcomeDiv>
                  <FormattedMessage {...messages.welcomeLabel}>
                    {
                      (formattedMSG) => (
                        <span style={styles.welcomeSpan} >
                          {`${formattedMSG} Gabriel`}
                        </span>
                      )
                    }
                  </FormattedMessage>
                  <div style={styles.underscoreDiv} />
                </WelcomeDiv>
                {
                  ( currentSection === HOME_SECTIONS.uncompleted ) && (
                    <SectionDiv>
                      {
                        ongoingPackages.toJS().map((item) => (
                          <div style={styles.packageCollection}>
                            <span>PKG Title</span>
                            <div>PKG Description</div>
                          </div>
                        ))
                      }
                    </SectionDiv>
                  ) || (
                    ( currentSection === HOME_SECTIONS.ongoing ) && (
                      <SectionDiv>
                        {
                          uncompletedPackages.toJS().map((item) => (
                            <div style={styles.packageCollection} >
                              <span>PKG Title</span>
                              <div>PKG Description</div>
                            </div>
                          ))
                        }
                      </SectionDiv>
                    ) || (
                      <div style={{ width: '100%', height: '100%' }}>
                        <PackageMenuWrapper>
                          <FormattedMessage {...messages.addNewTripsLabel}>
                            {
                              (formattedMSG) => (
                                <div style={styles.msgDiv}>
                                  <h3>{formattedMSG}</h3>
                                </div>
                              )
                            }
                          </FormattedMessage>
                          <FormattedMessage {...messages.addNewTripsButtonLabel} style={styles.msgDiv} >
                            {
                              (formattedMSG) => (
                                <Button onClick={() => router.push(ROUTES.PKG_EDITOR)} >
                                  {formattedMSG}
                                  </Button>
                              )
                            }
                          </FormattedMessage>
                        </PackageMenuWrapper>
                        <PackageMenuWrapper>
                          <FormattedMessage {...messages.manageProfileLabel}>
                            {
                              (formattedMSG) => (
                                <div style={styles.msgDiv}>
                                  <h3>{formattedMSG}</h3>
                                </div>
                              )
                            }
                          </FormattedMessage>
                          <FormattedMessage {...messages.manageProfileButtonLabel} style={styles.msgDiv} >
                            {
                              (formattedMSG) => (
                                <Button onClick={() => router.push(ROUTES.PROFILE)} >
                                  {formattedMSG}
                                </Button>
                              )
                            }
                          </FormattedMessage>
                        </PackageMenuWrapper>
                      </div>
                    )
                  )
                }
                <section>
                  <Badge
                    badgeContent={27}
                    secondary={true}
                    badgeStyle={styles.badge.badgeStyle}
                    style={styles.badge.style}
                  >
                    <FloatingActionButton onClick={openHomeChat}>
                      <SVGMail />
                    </FloatingActionButton>
                  </Badge>
                  <ChatNotReadyModal open={isChatOpen} onDismiss={closeHomeChat} />
                </section>
              </Body>
            </div>
          )
        }
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  avatar: PropTypes.object,
  appLoading: PropTypes.bool,
  closeChat: PropTypes.func,
  currentObjectSelected: PropTypes.bool,
  currentSection: PropTypes.number,
  initLoadData: PropTypes.func,
  isMobile: PropTypes.bool,
  isChatOpen: PropTypes.bool,
  openChat: PropTypes.func,
  ongoingPackages: PropTypes.object,
  router: PropTypes.object,
  stopLoading: PropTypes.func,
  screenDimen: PropTypes.object,
  uncompletedPackages: PropTypes.object,
  updateAvatar: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  avatar: makeSelectAvatar(),
  appLoading: makeSelectLoading(),
  currentSection: makeSelectCurrentSection(),
  isMobile: makeSelectIsMobile(),
  isChatOpen: makeSelectOpenChat(),
  screenDimen: makeSelectScreenDimentions(),
  ongoingPackages: makeSelectOngoingPackages(),
  uncompletedPackages: makeSelectUncompletedPackages(),
});

export function mapDispatchToProps(dispatch) {
  return {
    closeHomeChat: () => {
      dispatch(closeChat());
    },
    openHomeChat: () => {
      dispatch(openChat());
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
