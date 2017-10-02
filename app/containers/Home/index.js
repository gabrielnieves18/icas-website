/**
 * HomePage
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

import {
  makeSelectAvatar,
  makeSelectIsMobile,
  makeSelectLoading,
  makeSelectScreenDimentions,
} from '../App/selectors';

import {
  makeSelectCurrentSection,
  makeSelectCurrentObjectData,
} from './selectors';

import {
  updateCurrentSection,
} from './actions';

import {
  startLoading,
  stopLoading,
  updateAvatar,
} from '../App/actions';

import { ROUTES } from '../../constants';

import Body from './Body';
import Button from './Button';
import HomeDrawer from './HomeDrawer';
import LoadingLogo from '../../components/LoadingLogo';
import LocaleToggle from '../LocaleToggle';
import messages from './messages';
import PackageMenuWrapper from './PackageMenuWrapper';
import UMBCLogo from '../../components/UMBCLogo';
import WelcomeDiv from './WelcomeDiv';
import Wrapper from './Wrapper';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const {
      avatar,
      appLoading,
      currentSection,
      isMobile,
      router,
      screenDimen,
      updateAvatar,
    } = this.props;

    const styles = {
      appBar: {
        background: '#00a680',
        position: 'absolute',
        left: '0px',
        top: '0px',
      },
      style: {
        position: 'fixed',
        right: `${isMobile ? '0px' : '16px'}`,
        bottom: `${isMobile ? '16px' : '32px'}`,
      },
      localeToggle: {
        padding: '10px 16px',
        position: 'fixed',
        width: '250px',
        bottom: '8px',
        left: '8px',
      },
      msgDiv: {
        color: 'rgb(96, 101, 104)',
        height: '16px',
        paddingLeft: '32px',
        textAlign: 'start',
        width: '100%',
      },
      underscoreDiv: {
        borderBottom: '1px solid rgb(210, 210, 210)',
        padding: '0 25%',
      },
      welcomeSpan: {
        fontSize: '42px',
        fontFamily: 'Helvetica Neue, Arial, sans-serif',
        fontWeight: 'lighter',
        padding: '16px',
      },
    };

    return (
      <Wrapper>
        <Helmet
          title="Image Context As a Service (ICAS)"
          meta={[
            { name: 'description', content: 'ICAS Home Page' },
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
                ) : (
                  // Display navigation menu
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <section style={{ width: '100%' }}>
                      <UMBCLogo height={74} width={200} />
                    </section>
                  </div>
                )
              }
              <HomeDrawer
                avatar={avatar}
                currentSection={currentSection}
                isMobile={isMobile}
                open={this.state.open}
                setOpen={this.setState}
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
                          {formattedMSG}
                        </span>
                      )
                    }
                  </FormattedMessage>
                  <div style={styles.underscoreDiv} />
                </WelcomeDiv>
                <div style={{ width: '100%', height: '100%' }}>
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
                <div style={styles.localeToggle}>
                  <LocaleToggle />
                </div>
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
  currentObjectSelected: PropTypes.bool,
  currentSection: PropTypes.number,
  initLoadData: PropTypes.func,
  isMobile: PropTypes.bool,
  router: PropTypes.object,
  stopLoading: PropTypes.func,
  screenDimen: PropTypes.object,
  updateCurrentSection: PropTypes.func,
  updateAvatar: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  avatar: makeSelectAvatar(),
  appLoading: makeSelectLoading(),
  currentSection: makeSelectCurrentSection(),
  isMobile: makeSelectIsMobile(),
  screenDimen: makeSelectScreenDimentions(),
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
